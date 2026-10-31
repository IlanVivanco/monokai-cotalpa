import { assignWorkbechColors, assignTokenColors, assignSemanticColors, translateScheme } from './utils/theme.js'
import { saveThemes } from './utils/file.js'
import themeBase from './rules/base.js'
import scheme from './colorScheme.js'
import variants from './themeVariations.js'

const themes = []

for (let { name, type, slug, variations } of variants) {
	const translatedScheme = variations ? translateScheme(scheme, variations) : scheme
	const workbechColors = assignWorkbechColors(themeBase.colors, translatedScheme, type)

	// Every theme also gets an italic version.
	for (let italics of [false, true]) {
		const label = [name !== 'Main' ? name : '', italics ? 'Italic' : ''].filter(Boolean).join(' ')
		const file = slug === 'main' && !italics ? '' : `-${slug}${italics ? '-italic' : ''}`

		themes.push({
			path: `themes/monokai-cotalpa${file}-color-theme.json`,
			meta: {
				name: label ? `Monokai Cotalpa ${label}` : 'Monokai Cotalpa',
				author: 'Ilán Vivanco <ilanvivanco@gmail.com>',
				$schema: 'vscode://schemas/color-theme',
				colorSpaceName: 'sRGB',
				semanticHighlighting: true,
				type: type,
			},
			colors: {
				semanticTokenColors: assignSemanticColors(themeBase.semanticColors, translatedScheme, italics, type),
				colors: workbechColors,
				tokenColors: assignTokenColors(themeBase.tokenColors, translatedScheme, italics, type),
			},
		})
	}
}

await saveThemes(themes)
