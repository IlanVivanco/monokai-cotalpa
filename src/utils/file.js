import fs from 'fs-extra'
import path from 'path'

export function writeJSON(filePath, data) {
	const resolvedPath = path.resolve('.', filePath)
	fs.outputFileSync(resolvedPath, JSON.stringify(data, null, 2))
}
