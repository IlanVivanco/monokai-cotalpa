import chroma from './utils/color.js'
import gray from './palettes/cool-gray.js'
import colors from './palettes/darker.js'

export default {
	strings: chroma(colors.yellow[100]).hex(),
	attribute: chroma(colors.orange[200]).hex(),
	operator: chroma(colors.red[300]).hex(),
	keyword: chroma(colors.cyan[200]).hex(),
	variable: chroma(colors.blue[300]).hex(),
	function: chroma(colors.green[200]).hex(),

	foreground: chroma(gray.grayscale[100]).hex(),
	focusedForeground: chroma(gray.grayscale[200]).hex(),
	mutedForeground: chroma(gray.grayscale[300]).hex(),
	darkForeground: chroma(gray.grayscale[400]).hex(),
	midtone: chroma(gray.grayscale[500]).hex(),
	lightBackground: chroma(gray.grayscale[600]).hex(),
	background: chroma(gray.grayscale[700]).hex(),
	dimmedBackground: chroma(gray.grayscale[800]).hex(),
	darkBackground: chroma(gray.grayscale[900]).hex(),
}
