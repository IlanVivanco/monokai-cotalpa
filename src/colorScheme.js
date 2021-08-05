import chroma from './utils/color.js'
import palette from './palettes/darker.js'
import gray from './palettes/cool-gray.js'

const colors = { ...gray, ...palette }

export default {
	'transparent': colors.gray[900],
	'yellow': colors.yellow[100],
	'orange': colors.orange[200],
	'red': colors.red[300],
	'cyan': colors.cyan[200],
	'blue': colors.blue[300],
	'green': colors.green[200],
	'purple': colors.purple[300],
	'white': colors.gray[50],
	'gray': colors.gray[400],
	'darkgray': colors.gray[900],
	'black': colors.gray[1000],

	'gray-100': colors.gray[100],
	'gray-200': colors.gray[200],
	'gray-300': colors.gray[300],
	'gray-400': colors.gray[400],
	'gray-500': colors.gray[500],
	'gray-600': colors.gray[600],
	'gray-700': colors.gray[700],
	'gray-800': colors.gray[800],
	'gray-900': colors.gray[900],
}
