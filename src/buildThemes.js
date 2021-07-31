import { themeBase } from './themeBase.js'
import { writeJSON } from './utils/file.js'

const variants = ['monokai-cotalpa']

variants.map((variant) => {
	writeJSON(`themes/theme-${variant}.json`, themeBase)
	console.log(`${variant} created!`)
})
