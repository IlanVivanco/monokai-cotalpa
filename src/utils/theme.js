import chroma from './color.js'

export function assignWorkbechColors(rules, scheme) {
	const translatedColors = {}

	for (let rule in rules) {
		// Ignore empty rules
		if (rules[rule] !== null) {
			const [color, opacity] = rules[rule]

			translatedColors[rule] = chroma(scheme[color])
				.alpha(opacity ? opacity : 1)
				.hex()
		}
	}

	return translatedColors
}

export function assignTokenColors(rules, scheme, italics = false) {
	const translatedTokens = []

	for (let rule of rules) {
		const colorRule = rule?.settings?.foreground

		// Ignore empty
		if (colorRule && typeof colorRule !== 'string') {
			const [color, opacity] = colorRule
			rule.settings.foreground = scheme[color]
			rule.settings.foreground = chroma(scheme[color])
				.alpha(opacity ? opacity : 1)
				.hex()

			translatedTokens.push(rule)
		}
	}

	return translatedTokens
}

export function assignSemanticColors(rules, scheme) {
	const translatedSemantics = {}

	for (let rule in rules) {
		// Ignore empty rules
		if (rules[rule] !== null) {
			const [color, opacity] = rules[rule].foreground

			translatedSemantics[rule] = chroma(scheme[color])
				.alpha(opacity ? opacity : 1)
				.hex()
		}
	}

	return translatedSemantics
}
