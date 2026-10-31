// Takes screenshots of the themes in a real VS Code, to review changes visually.
//
// Usage: npm run screenshots -- [label] [--themes=main,dark,...|all] [--scenes=main,scm,...|all]
//
// Screenshots are saved in screenshots/<NN>-<label>/, numbered so rounds can be compared.
// By default, the main theme gets every scene and the other themes get the main scene.
//
// It installs the packaged extension instead of using --extensionDevelopmentPath:
// in development mode VS Code always applies the extension's first theme.

import fs from 'fs-extra'
import os from 'os'
import path from 'path'
import { execFileSync, spawnSync } from 'child_process'
import { downloadAndUnzipVSCode, resolveCliPathFromVSCodeExecutablePath } from '@vscode/test-electron'
import { _electron } from 'playwright-core'

const ROOT = path.resolve('.')
const OUTPUT = path.join(ROOT, 'screenshots')
const SCENES = ['main', 'scm', 'diff', 'palette', 'markdown']
const WIDTH = 1500
const HEIGHT = 900

// Without a display (CI, WSL without WSLg) or to avoid popping windows, run inside Xvfb.
if (process.platform === 'linux' && !process.env.SCREENSHOTS_XVFB && hasCommand('xvfb-run')) {
	const { status } = spawnSync(
		'xvfb-run',
		['-a', '-s', `-screen 0 ${WIDTH}x${HEIGHT}x24`, process.execPath, ...process.argv.slice(1)],
		{ stdio: 'inherit', env: { ...process.env, SCREENSHOTS_XVFB: '1' } }
	)
	process.exit(status ?? 1)
}

const args = process.argv.slice(2)
const option = (name) => args.find((arg) => arg.startsWith(`--${name}=`))?.split('=')[1]
const label = args.find((arg) => !arg.startsWith('--')) ?? 'review'

const { contributes } = await fs.readJson(path.join(ROOT, 'package.json'))
const themes = contributes.themes.map(({ label, path: file }) => ({
	label,
	slug: path.basename(file).replace(/^monokai-cotalpa-?|-?color-theme\.json$/g, '') || 'main',
}))

const pickedThemes = pick(
	option('themes'),
	themes.map((theme) => theme.slug),
	['main']
)
const pickedScenes = pick(option('scenes'), SCENES, SCENES)
const runs = themes
	.filter((theme) => pickedThemes.includes(theme.slug) || !option('themes'))
	.flatMap((theme) => (pickedThemes.includes(theme.slug) ? pickedScenes : ['main']).map((scene) => ({ theme, scene })))

const outputDir = path.join(OUTPUT, `${nextRoundNumber()}-${label}`)
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cotalpa-screenshots-'))

try {
	console.log('Building and packaging the themes…')
	const vsix = path.join(tmp, 'cotalpa.vsix')
	execFileSync('npx', ['vsce', 'package', '-o', vsix], { stdio: 'ignore' })

	const executable = await downloadAndUnzipVSCode('stable')
	const workspace = createWorkspace(tmp)

	fs.ensureDirSync(outputDir)
	for (let { theme, scene } of runs) {
		console.log(`${theme.label}: ${scene}`)
		await takeScreenshot({
			executable,
			vsix,
			workspace,
			theme,
			scene,
			file: path.join(outputDir, `${theme.slug}-${scene}.png`),
		})
	}

	console.log(`Saved in ${path.relative(ROOT, outputDir)}/`)
} finally {
	fs.removeSync(tmp)
}

async function takeScreenshot({ executable, vsix, workspace, theme, scene, file }) {
	const userDataDir = path.join(tmp, `user-${theme.slug}-${scene}`)
	const extensionsDir = path.join(userDataDir, 'extensions')

	fs.outputJsonSync(path.join(userDataDir, 'User', 'settings.json'), {
		'workbench.colorTheme': theme.label,
		'workbench.startupEditor': 'none',
		'workbench.secondarySideBar.defaultVisibility': 'hidden',
		'workbench.tips.enabled': false,
		'security.workspace.trust.enabled': false,
		'extensions.ignoreRecommendations': true,
		'chat.disableAIFeatures': true,
		'telemetry.telemetryLevel': 'off',
		'update.mode': 'none',
		'editor.fontSize': 14,
		'git.openRepositoryInParentFolders': 'always',
		'terminal.integrated.defaultProfile.linux': 'bash',
		'terminal.integrated.defaultProfile.osx': 'bash',
	})

	const cli = resolveCliPathFromVSCodeExecutablePath(executable)
	execFileSync(
		cli,
		[`--user-data-dir=${userDataDir}`, `--extensions-dir=${extensionsDir}`, '--install-extension', vsix],
		{
			stdio: 'ignore',
			env: { ...process.env, DONT_PROMPT_WSL_INSTALL: '1' },
			shell: process.platform === 'win32',
		}
	)

	const files = {
		main: ['demo/typescript.ts', 'demo/php.php'],
		scm: ['demo/python.py'],
		palette: ['demo/react.js'],
		markdown: ['demo/markdown.md'],
	}
	const opened =
		scene === 'diff'
			? ['--diff', path.join(tmp, 'typescript.before.ts'), path.join(workspace, 'demo/typescript.ts')]
			: (files[scene] ?? []).map((file) => path.join(workspace, file))

	const app = await _electron.launch({
		executablePath: executable,
		args: [
			`--user-data-dir=${userDataDir}`,
			`--extensions-dir=${extensionsDir}`,
			'--disable-gpu',
			'--no-sandbox',
			'--skip-release-notes',
			workspace,
			...opened,
		],
	})

	try {
		const window = await app.firstWindow()
		await window.setViewportSize({ width: WIDTH, height: HEIGHT })
		await wait(6000)

		const { keyboard } = window
		if (scene === 'main') {
			await keyboard.press('Control+Backquote')
			await wait(2500)
			await keyboard.type('clear; bash ../ansi.sh; ls --color=always demo')
			await keyboard.press('Enter')
			await wait(1500)
		}
		if (scene === 'scm') {
			await keyboard.press('Control+Shift+G')
			await wait(2500)
		}
		if (scene === 'palette') {
			await keyboard.press('Control+Shift+P')
			await wait(800)
			await keyboard.type('theme')
			await wait(1200)
		}

		await window.screenshot({ path: file })
	} finally {
		await app.close()
	}
}

// A copy of demo/ in a git repo with staged, unstaged, deleted and untracked changes.
// Helper files go next to it, so they don't show up in the explorer.
function createWorkspace(tmp) {
	const workspace = path.join(tmp, 'workspace')
	fs.copySync(path.join(ROOT, 'demo'), path.join(workspace, 'demo'))
	fs.writeFileSync(path.join(workspace, 'demo/removed.txt'), 'Deleted in the demo repo\n')

	const git = (...gitArgs) => execFileSync('git', gitArgs, { cwd: workspace, stdio: 'ignore' })
	git('init', '-q')
	git('add', '.')
	git('-c', 'user.name=Cotalpa', '-c', 'user.email=cotalpa@example.com', 'commit', '-q', '-m', 'Demo files')

	const typescript = path.join(workspace, 'demo/typescript.ts')
	fs.copySync(typescript, path.join(tmp, 'typescript.before.ts'))
	fs.writeFileSync(
		typescript,
		fs
			.readFileSync(typescript, 'utf8')
			.replace("'Monokai Cotalpa'", "'Monokai Cotalpa Theme'")
			.replace('console.log', '// console.log') + '// changed\n'
	)
	fs.appendFileSync(path.join(workspace, 'demo/css.css'), '\n/* staged */\n')
	git('add', 'demo/css.css')
	git('rm', '-q', 'demo/removed.txt')
	fs.writeFileSync(path.join(workspace, 'demo/untracked.txt'), 'new\n')

	// Prints every ANSI color in the terminal scene
	fs.writeFileSync(
		path.join(tmp, 'ansi.sh'),
		[
			'for i in 30 31 32 33 34 35 36 37; do printf "\\e[${i}m %-9s\\e[0m" "c$i"; done; echo',
			'for i in 90 91 92 93 94 95 96 97; do printf "\\e[${i}m %-9s\\e[0m" "c$i"; done; echo',
			'printf "\\e[31mERROR\\e[0m \\e[33mWARN\\e[0m \\e[32mOK\\e[0m \\e[34mINFO\\e[0m \\e[35mDEBUG\\e[0m \\e[36mTRACE\\e[0m\\n"',
		].join('\n') + '\n'
	)

	return workspace
}

function nextRoundNumber() {
	const rounds = fs.existsSync(OUTPUT) ? fs.readdirSync(OUTPUT).map((name) => parseInt(name, 10) || 0) : []
	return String(Math.max(0, ...rounds) + 1).padStart(2, '0')
}

function pick(value, available, fallback) {
	if (!value) return fallback
	if (value === 'all') return available
	return value.split(',')
}

function hasCommand(command) {
	return spawnSync('which', [command], { stdio: 'ignore' }).status === 0
}

function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
