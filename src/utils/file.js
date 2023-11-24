import fs from 'fs-extra'
import path from 'path'

function writeJSON(filePath, data) {
	const resolvedPath = path.resolve('.', filePath)
	fs.outputFileSync(resolvedPath, JSON.stringify(data, null, 2))
}

async function addThemesToPackage(data = {}) {
	const packageData = await fs.readJson('./package.json')
	packageData.contributes.themes = data

	writeJSON('./package.json', packageData)
}

export function saveThemes(themes) {
	const metaForPackage = []

	for (let theme of themes) {
		const themeData = {
			...theme.meta,
			...theme.colors,
		}

		metaForPackage.push({
			label: themeData.name,
			uiTheme: themeData.type === 'dark' ? 'vs-dark' : 'vs',
			path: `./${theme.path}`,
		})

		writeJSON(theme.path, themeData)
	}

	// Save data to package.json
	addThemesToPackage(metaForPackage)
}
