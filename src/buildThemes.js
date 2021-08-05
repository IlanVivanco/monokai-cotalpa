import { assignWorkbechColors, assignTokenColors } from './utils/theme.js'
import { writeJSON } from './utils/file.js'
import themeBase from './rules/base.js'
import scheme from './colorScheme.js'

const themes = ['dark']

themes.forEach((variant) => {
	console.log(`Building ${variant} theme...`)
	const translatedWorkbechColors = assignWorkbechColors(themeBase.colors, scheme)
	const translatedTokenColors = assignTokenColors(themeBase.tokenColors, scheme)

	writeJSON(`themes/monokai-cotalpa-${variant}-color-theme.json`, {
		name: 'Monokai Cotalpa',
		author: 'Ilán Vivanco',
		type: 'dark',
		$schema: 'vscode://schemas/color-theme',
		colorSpaceName: 'sRGB',

		colors: translatedWorkbechColors,
		tokenColors: translatedTokenColors,
	})
	// console.log(`${variant} created!`)
})
