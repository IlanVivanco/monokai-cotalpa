import chroma from './color.js'
import cloneDeep from 'lodash.clonedeep'

export function assignWorkbechColors(rules, scheme) {
	const assignedRules = {}

	for (let rule in rules) {
		// Ignore empty rules
		if (rules[rule] !== null) {
			const [color, opacity] = rules[rule]

			assignedRules[rule] = chroma(scheme[color])
				.alpha(opacity ? opacity : 1)
				.hex()
		}
	}

	return assignedRules
}

export function assignTokenColors(rules, scheme, italics = false) {
	const assignedRules = []
	const clonedRules = cloneDeep(rules)

	for (let rule of clonedRules) {
		const colorRule = rule?.settings?.foreground
		const styleRule = rule?.settings?.fontStyle

		// Ignore empty
		if (colorRule && typeof colorRule !== 'string') {
			const [color, opacity] = colorRule
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

export function assignSemanticColors(rules, scheme) {
	const assignedRules = {}

	for (let rule in rules) {
		// Ignore empty rules
		if (rules[rule] !== null) {
			const [color, opacity] = rules[rule].foreground

			assignedRules[rule] = chroma(scheme[color])
				.alpha(opacity ? opacity : 1)
				.hex()
		}
	}

	return assignedRules
}

export function translateScheme(scheme, variant) {
	const translatedScheme = {}

	// If variant is not found, return the original scheme
	if (!variant) return scheme

	// Check if there is a variation for every color in the scheme
	for (let colorKey in scheme) {
		const newColor = chroma(scheme[colorKey])

		// Loop over the color setting on the picked variant
		for (let colorName in variant) {
			// If the color is found in the setting, apply the variation
			if (colorKey.match(colorName)) {
				const settings = variant[colorName]

				// Aplly each setting to the color
				for (let setting in settings) {
					switch (setting) {
						case 'hue':
							newColor.hue(settings[setting])
							break
						case 'shift':
							newColor.shift(settings[setting])
							break
						case 'saturation':
							newColor.saturate(settings[setting])
							break
						case 'brightness':
							newColor.brighten(settings[setting])
							break
						case 'alpha':
							newColor.alpha(settings[setting])
							break
					}
				}
			}

			translatedScheme[colorKey] = newColor.hex()
		}
	}

	// If no new translatedScheme colors, return the original scheme
	if (Object.keys(translatedScheme).length === 0) {
		return scheme
	} else {
		return translatedScheme
	}
}
