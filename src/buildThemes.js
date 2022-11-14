import { assignWorkbechColors, assignTokenColors, assignSemanticColors, translateScheme } from './utils/theme.js'
import { saveThemes } from './utils/file.js'
import themeBase from './rules/base.js'
import scheme from './colorScheme.js'
import variants from './themeVariations.js'

const themes = []

for (let { name, type, slug, italics, variations } of variants) {
	const translatedScheme = variations ? translateScheme(scheme, variations) : scheme

	const semanticColors = assignSemanticColors(themeBase.semanticColors, translatedScheme, type)
	const workbechColors = assignWorkbechColors(themeBase.colors, translatedScheme, type)
	const tokenColors = assignTokenColors(themeBase.tokenColors, translatedScheme, italics, type)

	themes.push({
		path:
			name !== 'Main'
				? `themes/monokai-cotalpa-${slug}-color-theme.json`
				: 'themes/monokai-cotalpa-color-theme.json',
		meta: {
			name: name !== 'Main' ? `Monokai Cotalpa ${name}` : 'Monokai Cotalpa',
			author: 'Ilán Vivanco <ilanvivanco@gmail.com>',
			$schema: 'vscode://schemas/color-theme',
			colorSpaceName: 'sRGB',
			semanticHighlighting: true,
			type: type,
		},
		colors: {
			semanticTokenColors: semanticColors,
			colors: workbechColors,
			tokenColors: tokenColors,
		},
	})
}

saveThemes(themes)
