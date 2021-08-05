import { assignWorkbechColors, assignTokenColors, assignSemanticColors, translateScheme } from './utils/theme.js'
import { saveThemes } from './utils/file.js'
import themeBase from './rules/base.js'
import scheme from './colorScheme.js'
import variants from './themeVariations.js'

const themes = []

for (let { name, type, slug, italics, variation } of variants) {
	const translatedScheme = variation ? translateScheme(scheme, variation) : scheme
	const semanticColors = assignSemanticColors(themeBase.semanticColors, translatedScheme)
	const workbechColors = assignWorkbechColors(themeBase.colors, translatedScheme)
	const tokenColors = assignTokenColors(themeBase.tokenColors, translatedScheme, italics)

	themes.push({
		path: `themes/monokai-cotalpa-${slug}-color-theme.json`,
		meta: {
			name: `Monokai Cotalpa ${name}`,
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
