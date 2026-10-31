// React component, to try the theme with TSX.
import { useEffect, useMemo, useState, type ReactNode } from 'react'

type Variant = 'main' | 'dark' | 'coffee'

interface SwatchProps {
	name: string
	hex: `#${string}`
	selected?: boolean
	onSelect: (name: string) => void
	children?: ReactNode
}

const VARIANTS: readonly Variant[] = ['main', 'dark', 'coffee'] as const

function Swatch({ name, hex, selected = false, onSelect, children }: SwatchProps) {
	return (
		<button
			type="button"
			className={`swatch ${selected ? 'swatch--selected' : ''}`}
			style={{ backgroundColor: hex, borderRadius: 4 }}
			aria-pressed={selected}
			onClick={() => onSelect(name)}
		>
			{children ?? name}
		</button>
	)
}

export default function ThemePicker({ initial = 'main' }: { initial?: Variant }) {
	const [variant, setVariant] = useState<Variant>(initial)
	const [colors, setColors] = useState<Record<string, `#${string}`>>({})

	useEffect(() => {
		let cancelled = false

		fetch(`/api/palettes/${variant}`)
			.then((response) => response.json())
			.then((data) => !cancelled && setColors(data))
			.catch(console.error)

		return () => {
			cancelled = true
		}
	}, [variant])

	const total = useMemo(() => Object.keys(colors).length, [colors])

	return (
		<section className="theme-picker">
			{/* Variant tabs */}
			<nav>
				{VARIANTS.map((name) => (
					<a key={name} href={`#${name}`} onClick={() => setVariant(name)}>
						{name}
					</a>
				))}
			</nav>

			{total > 0 ? (
				Object.entries(colors).map(([name, hex]) => <Swatch key={name} name={name} hex={hex} onSelect={console.log} />)
			) : (
				<p>Loading Monokai Cotalpa&hellip;</p>
			)}
		</section>
	)
}
