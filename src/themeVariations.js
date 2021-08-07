/**
 * Each object will create a new theme.
 *
 * You can set color variations (see ./src/colorScheme.js). e.g.:
 * variation: {
 * 	"color":{
 * 		"setting": value,
 * 		"another-setting": anotherValue,
 * 	}
 * }
 *
 * Available settings:
 * - 'alpha': sets the opacity of the color (float value).
 * - 'brightness': makes the color lighter or darker (float value).
 * - 'saturation': makes the color more or less saturated (float value).
 * - 'hue': sets the hue of the color (int 0-360).
 * - 'shift': shifts the hue of the color (ind positive or negative).
 */

export default [
	{
		name: 'Main',
		type: 'dark',
	},
	{
		name: 'Italic',
		slug: 'italic',
		type: 'dark',
		italics: true,
		variations: {
			'gray': {
				// brightness: .5,
			},
			'(yellow|blue|green|orange|red|cyan)': {
				// saturation: 1.3,
			},
		},
	},
]
