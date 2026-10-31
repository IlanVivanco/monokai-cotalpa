import chroma from 'chroma-js'
import color from './palettes/cotalpa.js'

// Lighter version of a color, for the bright ANSI colors in the terminal.
const bright = (hex) => chroma.mix(hex, '#ffffff', 0.3, 'rgb').hex()

export default {
	'transparent': color.gray[900],
	'yellow': color.yellow[100],
	'orange': color.orange[200],
	'red': color.red[300],
	'cyan': color.cyan[200],
	'blue': color.blue[300],
	'green': color.green[200],
	'teal': color.teal[200],
	'magenta': color.magenta[400],
	'purple': color.purple[300],

	'bright-yellow': bright(color.yellow[100]),
	'bright-red': bright(color.red[300]),
	'bright-cyan': bright(color.cyan[200]),
	'bright-blue': bright(color.blue[300]),
	'bright-green': bright(color.green[200]),
	'bright-magenta': bright(color.magenta[400]),

	'white': color.gray[50],
	'lightgray': color.gray[200],
	'gray': color.gray[300],
	'darkgray': color.gray[700],
	'black': color.gray[1000],

	'success': color.green[200],
	'warning': color.orange[200],
	'info': color.cyan[200],
	'error': color.red[300],

	'gray-100': color.gray[100],
	'gray-200': color.gray[200],
	'gray-300': color.gray[300],
	'gray-400': color.gray[400],
	'gray-500': color.gray[500],
	'gray-600': color.gray[600],
	'gray-700': color.gray[700],
	'gray-800': color.gray[800],
	'gray-900': color.gray[900],
}
