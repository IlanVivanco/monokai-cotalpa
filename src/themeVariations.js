/**
 * Each object will create a new theme.
 *
 * You can also apply changes to the current theme by setting variations —see ./src/themeVariations.js—.
 * You can define a regex rule and then as many variations as you want for that particular match.
 * e.g.:
 * {
 *		...,
 * 	variations: {
 * 		"(yellow)":{
 * 			alpha: 0.8,
 * 			hue: 220,
 * 		}
 * 	}
 * }
 *
 * Available settings:
 * - 'alpha': sets the opacity of the color (float value).
 * - 'brightness': makes the color lighter or darker (float value).
 * - 'saturation': makes the color more or less saturated (float value).
 * - 'hue': sets the hue of the color (int 0-360).
 * - 'shift': shifts the hue of the color (int value).
 *
 * Some useful regex examples:
 * yellow: Only yellow
 * (yellow|red|blue): Yellow, red or blue
 * .*: All colors
 * ^(?!gray): All colors but gray
 */

export default [
	{
		name: 'Main',
		slug: 'main',
		type: 'dark',
	},
	{
		name: 'Dark',
		slug: 'main-dark',
		type: 'dark',
		variations: {
			'^(?!gray)': {
				// shift: -25,
			},
		},
	},
	{
		name: 'Italic',
		slug: 'main-italic',
		type: 'dark',
		italics: true,
	},
	{
		name: 'Coffee',
		slug: 'coffee-dark',
		type: 'dark',
		variations: {
			'(gray)': {
				hue: 30,
				saturation: -0.5,
				brightness: -0.1,
			},
			'^(?!gray)': {
				saturation: 0.1,
				brightness: 0.2,
			},
		},
	},
	{
		name: 'Coffee Italic',
		slug: 'coffee-italic',
		type: 'dark',
		italics: true,
		variations: {
			'(gray)': {
				hue: 30,
				saturation: -0.5,
				brightness: -0.1,
			},
			'^(?!gray)': {
				saturation: 0.1,
				brightness: 0.2,
			},
		},
	},
]
