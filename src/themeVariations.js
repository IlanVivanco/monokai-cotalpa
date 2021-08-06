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
 * - 'darkness': makes the color darker (float value).
 * - 'lightness': makes the color lighter (float value).
 * - 'saturation': makes the color more saturated (float value).
 * - 'saturation': makes the color less saturated (float value).
 * - 'hue': sets the hue of the color (int 0-360).
 * - 'shift': shifts the hue of the color (ind positive or negative).
 */

export default [
	{
		name: 'Main',
		type: 'dark',
		italics: false,
		variation: {
			gray: {
				hue: 40,
				darkness: 0.2,
			},
		},
	},

	{
		name: 'Golden Dark',
		slug: 'golden-dark',
		type: 'dark',
		italics: false,
	},
]
