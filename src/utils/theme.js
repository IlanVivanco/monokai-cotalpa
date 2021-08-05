import chroma from './color.js'

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

	for (let rule of rules) {
		const colorRule = rule?.settings?.foreground

		// Ignore empty
		if (colorRule && typeof colorRule !== 'string') {
			const [color, opacity] = colorRule
			rule.settings.foreground = scheme[color]
			rule.settings.foreground = chroma(scheme[color])
				.alpha(opacity ? opacity : 1)
				.hex()

			assignedRules.push(rule)
		}
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
		for (let chosenColor in variant) {
			// If the color is found in the setting, apply the variation
			if (colorKey.includes(chosenColor)) {
				const settings = variant[chosenColor]

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
						case 'desaturation':
							newColor.desaturate(settings[setting])
							break
						case 'darkness':
							newColor.darken(settings[setting])
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

	return translatedScheme
}
