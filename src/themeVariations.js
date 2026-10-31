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
 * Regexes are matched against the keys of ./src/colorScheme.js. Anchor them (^...$),
 * otherwise 'gray' also matches 'lightgray' or 'darkgray'.
 * Some useful regex examples:
 * ^yellow$: Only yellow
 * ^(yellow|red|blue)$: Yellow, red or blue
 * .*: All colors
 */

// Neutral colors: every gray, including the named ones.
const NEUTRALS = '^(transparent|white|black|(light|dark)?gray|gray-\\d+)$'

// Accent colors: everything that is not a neutral.
const ACCENTS = `^(?!${NEUTRALS.slice(1, -1)}$)`

// Neutral colors used as backgrounds.
const BACKGROUNDS = '^(transparent|black|darkgray|gray-[6-9]00)$'

const coffee = {
	[NEUTRALS]: {
		hue: 30,
		brightness: -0.1,
	},
	[ACCENTS]: {
		saturation: 0.1,
		brightness: 0.2,
	},
}

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
			[BACKGROUNDS]: {
				brightness: -0.3,
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
		variations: coffee,
	},
	{
		name: 'Coffee Italic',
		slug: 'coffee-italic',
		type: 'dark',
		italics: true,
		variations: coffee,
	},
]
