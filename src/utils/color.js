// Given a number between 0-1, maps the color to a range between 0-255 and returns the hex string.

import chroma from 'chroma-js'

function alpha(color, alpha = 1) {
	return chroma(color).alpha(alpha).hex()
}

export { alpha }
