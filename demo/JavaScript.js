/**
 * JavaScript: Shades of purple can be genius
 *
 * @param String hello Hello.
 * @since 1.0.0
 */

// String.
const world = '🗺️'

const mc = 'Monokai cotalpa — Yet another color scheme for VS Code.'
console.log('mc', mc)

// Class.
class vsc extends User {}
console.log(vsc)

// Const.
function ilan() {
	return 'Ilán Vivanco'
}
ilan()

// Let.
let theme = () => 'Monokai Cotalpa'
console.log(theme)

/**
 * Gise's Function.
 *
 * @param String name
 */
function gise(name) {
	return name
}

gise('Gise Haag')

// Regex.
const coursePlatformURL = new RegExp('/' + window.location.host + '/')
console.log('coursePlatformURL', coursePlatformURL)

import { btnBarSvgSpeed } from './constants'

/**
 *  Angle increment.
 *
 * — 360/(total speed values).
 * — 360/6 = 60.
 */
export const speedAngles = {
	1: '0',
	1.25: '60',
	1.5: '120',
	1.75: '180',
	2: '240',
	0.75: '300',
}

/**
 * Speed SVG CSS.
 *
 * @param Number one Angle to rotate the SVG.
 * @param Number two Angle to rotate the SVG.
 * @param Number three Angle to rotate the SVG.
 */
export const speedCSS = (one, two, three) => {
	btnBarSvgSpeed.css({
		transform: `rotate(${one}deg)`,
		transform: `rotate(${two}deg)`,
		transform: `rotate(${three}deg)`,
	})
}

// Conditionals.
if (isCotalpa) {
	console.log("Let's intall this theme!")
} else if (isMonokai) {
	console.log('Going for the good old theme.')
} else {
	console.log('Feeling wild today. 🐯')
}
