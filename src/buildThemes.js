import { assignWorkbechColors, assignTokenColors, assignSemanticColors } from './utils/theme.js'
import { saveThemes } from './utils/file.js'
import themeBase from './rules/base.js'
import scheme from './colorScheme.js'

const themes = []
const variants = [
	{
		name: 'Dark',
		slug: 'dark',
		type: 'dark',
		semantic: true,
		italics: true,
	},
]

for (let { name, type, slug, semantic, italics } of variants) {
	const translatedWorkbechColors = assignWorkbechColors(themeBase.colors, scheme)
	const translatedTokenColors = assignTokenColors(themeBase.tokenColors, scheme, italics)
	const translatedSemanticColors = assignSemanticColors(themeBase.semanticColors, scheme)

	themes.push({
		path: `themes/monokai-cotalpa-${slug}-color-theme.json`,
		meta: {
			name: `Monokai Cotalpa ${name}`,
			author: 'Ilán Vivanco <ilanvivanco@gmail.com>',
			$schema: 'vscode://schemas/color-theme',
			colorSpaceName: 'sRGB',
			semanticHighlighting: semantic,
			type: type,
		},
		colors: {
			semanticTokenColors: translatedSemanticColors,
			colors: translatedWorkbechColors,
			tokenColors: translatedTokenColors,
		},
	})
}

saveThemes(themes)
