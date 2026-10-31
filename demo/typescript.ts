// @ts-ignore
import { NgModule } from '@angular/core'
import type { Request, Response } from 'express'
import * as path from 'node:path'

const theme = 'Monokai Cotalpa'
console.log(theme)

export enum Variant {
	Main = 'main',
	Dark = 'dark',
	Coffee = 'coffee',
}

export interface Palette {
	readonly name: string
	colors: Record<string, `#${string}`>
	italic?: boolean
}

type Hex = `#${string}`
type Maybe<T> = T | null | undefined

const HEX_PATTERN = /^#(?:[0-9a-f]{3}){1,2}$/i
const MAX_ALPHA = 1.0

/**
 * Base class for every theme variant.
 * @param name - The label shown in the theme picker.
 */
export abstract class Theme<T extends Palette = Palette> {
	static count = 0
	protected cache = new Map<string, Hex>()

	constructor(public readonly name: string, private palette: T) {
		Theme.count++
	}

	abstract build(): Promise<void>

	color(key: keyof T['colors'] & string, alpha = MAX_ALPHA): Maybe<Hex> {
		const value = this.palette.colors[key]
		if (!value || !HEX_PATTERN.test(value)) return null

		return alpha < 1 ? (`${value}${Math.round(alpha * 255).toString(16)}` as Hex) : value
	}
}

@NgModule({ declarations: [], bootstrap: [] })
export class CotalpaTheme extends Theme {
	async build(): Promise<void> {
		const file = path.join('themes', `${this.name.toLowerCase()}.json`)
		const colors = (await import('./palette.json')).default ?? {}

		for (const [key, value] of Object.entries(colors)) {
			this.cache.set(key, value as Hex)
		}

		console.info(`Saved ${this.cache.size} colors in ${file}`)
	}
}

export const handler = async (req: Request, res: Response) => {
	const variant = (req.query.variant as Variant) || Variant.Main
	const isDark = variant !== Variant.Main && variant?.startsWith('d')

	res.json({ variant, isDark, total: Theme.count, created: new Date() })
}

export class User {}
