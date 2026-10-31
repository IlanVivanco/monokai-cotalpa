// Checks the theme rules against the official VS Code theme color reference.
// Run it with `npm run validate`.

import fs from 'fs-extra'
import tokenColors from '../src/rules/tokens.js'

const DOCS_URL = 'https://raw.githubusercontent.com/microsoft/vscode-docs/main/api/references/theme-color.md'
const WORKBENCH_RULES = './src/rules/workbench.js'
const THEME = './themes/monokai-cotalpa-color-theme.json'

const errors = []

// Duplicated keys silently override each other in an object literal
const source = fs.readFileSync(WORKBENCH_RULES, 'utf8')
const sourceKeys = [...source.matchAll(/^\s*'([^']+)':/gm)].map((match) => match[1])
for (let key of new Set(sourceKeys.filter((key, index) => sourceKeys.indexOf(key) !== index))) {
	errors.push(`Duplicated workbench key: ${key}`)
}

// Scopes listed in more than one rule override each other too
const scopes = tokenColors.flatMap((rule) => [].concat(rule.scope ?? []))
for (let scope of new Set(scopes.filter((scope, index) => scopes.indexOf(scope) !== index))) {
	errors.push(`Scope used by more than one token rule: ${scope}`)
}

// Every workbench key must exist in the docs
const docs = await (await fetch(DOCS_URL)).text()
const documentedKeys = new Set([...docs.matchAll(/^- `([a-zA-Z0-9.]+)`/gm)].map((match) => match[1]))
const { colors } = await fs.readJson(THEME)
for (let key of Object.keys(colors)) {
	if (!documentedKeys.has(key)) errors.push(`Unknown or deprecated workbench key: ${key}`)
}

const missing = [...documentedKeys].filter((key) => !(key in colors))
console.log(
	`${Object.keys(colors).length} workbench keys set, ${missing.length} documented keys left to VS Code defaults.`
)

if (errors.length) {
	console.error(errors.join('\n'))
	process.exit(1)
}

console.log('No problems found.')
