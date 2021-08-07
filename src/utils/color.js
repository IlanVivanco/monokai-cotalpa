// Given a number between 0-1, maps the color to a range between 0-255 and returns the hex string.

import chroma from 'chroma-js'

class colorUtils {
	constructor(color) {
		this._currentValue = chroma(color)
	}

	changeColor(mode, level = 1) {
		const currentColor = this._currentValue

		switch (mode) {
			case 'shift':
				this._currentValue = currentColor.set('hsl.h', currentColor.get('hsl.h') + level)
				break
			case 'hue':
				this._currentValue = currentColor.set('hsl.h', level)
				break
			default:
				this._currentValue = currentColor[mode](level)
		}

		return this
	}

	alpha(level = 1) {
		return this.changeColor('alpha', level)
	}

	brighten(level = 1) {
		return this.changeColor('brighten', level)
	}

	saturate(level = 1) {
		return this.changeColor('saturate', level)
	}

	shift(level = 1) {
		return this.changeColor('shift', level)
	}

	hue(level = 1) {
		return this.changeColor('hue', level)
	}

	hex() {
		return this._currentValue.hex()
	}

	toString() {
		return this.hex()
	}
}

export default function (color) {
	if (!color) return
	return new colorUtils(color)
}
