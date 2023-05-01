import chroma from './color.js'
import cloneDeep from 'lodash.clonedeep'

export function assignWorkbechColors(rules, scheme, mode = 'dark') {
	const assignedRules = {}

	for (let rule in rules) {
		// Ignore empty rules
		if (rules[rule] !== null) {
			const [color, opacity] = getColor(rules[rule], mode)

			assignedRules[rule] = chroma(scheme[color])
				.alpha(opacity ? opacity : 1)
				.hex()
		}
	}

	return assignedRules
}

export function assignTokenColors(rules, scheme, italics = false, mode = 'dark') {
	const assignedRules = []
	const clonedRules = cloneDeep(rules)

	for (let rule of clonedRules) {
		const colorRule = rule?.settings?.foreground
		const styleRule = rule?.settings?.fontStyle

		// Ignore empty
		if (colorRule && typeof colorRule !== 'string') {
			const [color, opacity] = getColor(colorRule, mode)
			rule.settings.foreground = chroma(scheme[color])
				.alpha(opacity ? opacity : 1)
				.hex()
		}

		if (styleRule && styleRule === 'config') {
			rule.settings.fontStyle = italics ? 'italic' : ''
		}

		assignedRules.push(rule)
	}

	return assignedRules
}

export function assignSemanticColors(rules, scheme, mode = 'dark') {
	const assignedRules = {}

	for (let rule in rules) {
		// Ignore empty rules
		if (rules[rule] !== null) {
			console.log(typeof rules[rule].foreground, rules[rule].foreground)

			const [color, opacity] = getColor(rules[rule].foreground, mode)

			assignedRules[rule] = chroma(scheme[color])
				.alpha(opacity ? opacity : 1)
				.hex()
		}
	}

	return assignedRules
}

function getColor(color, mode) {
	return color.hasOwnProperty(mode) ? color[mode] : color
}

export function translateScheme(scheme, variantions) {
	const translatedScheme = {}

	// If variantions is not found, return the original scheme
	if (!variantions) return scheme

	// Check if there is a variation for every color in the scheme
	for (let colorKey in scheme) {
		const newColor = chroma(scheme[colorKey])

		// Loop over the color setting on the picked variantions
		for (let colorName in variantions) {
			// If the color is found in the settings, apply the variation
			if (colorKey.match(colorName)) modifyColor(newColor, variantions[colorName])

			translatedScheme[colorKey] = newColor.hex()
		}
	}

	// Return the new translatedScheme or the original scheme if empty
	return Object.keys(translatedScheme).length > 0 ? translatedScheme : scheme
}

function modifyColor(color, settings = {}) {
	// Aplly each setting to the color
	for (let setting in settings) {
		switch (setting) {
			case 'hue':
				color.hue(settings[setting])
				break
			case 'shift':
				color.shift(settings[setting])
				break
			case 'saturation':
				color.saturate(settings[setting])
				break
			case 'brightness':
				color.brighten(settings[setting])
				break
			case 'alpha':
				color.alpha(settings[setting])
				break
		}
	}

	return color
}
