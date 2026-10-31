// Small palette helpers, to try the theme with Java.
package com.cotalpa.themes;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public final class Palette {
	public static final String THEME = "Monokai Cotalpa";
	private static final Pattern HEX = Pattern.compile("^#(?:[0-9a-f]{3}){1,2}$", Pattern.CASE_INSENSITIVE);

	public enum Variant { MAIN, DARK, COFFEE }

	public sealed interface Describable permits Color {
		String describe();
	}

	public record Color(String name, String hex, double alpha) implements Describable {
		public Color {
			if (!HEX.matcher(hex).matches()) {
				throw new IllegalArgumentException("Invalid color for %s: %s".formatted(name, hex));
			}
		}

		@Override
		public String describe() {
			return String.format("%s is %s at %.0f%%", name, hex, alpha * 100);
		}
	}

	private final Map<String, Color> colors;
	private Variant variant = Variant.MAIN;

	public Palette(List<Color> colors) {
		this.colors = colors.stream().collect(Collectors.toMap(Color::name, c -> c));
	}

	public Optional<Color> find(String name) {
		return Optional.ofNullable(colors.get(name));
	}

	@SuppressWarnings("unused")
	private int count() {
		return colors.size();
	}

	public static void main(String[] args) {
		var palette = new Palette(List.of(new Color("yellow", "#fcdc7d", 1.0), new Color("red", "#fc988d", 0.8)));
		palette.variant = Variant.COFFEE;

		String label = switch (palette.variant) {
			case MAIN -> "main theme";
			case DARK, COFFEE -> palette.variant.name().toLowerCase() + " variant";
		};

		palette.find("yellow").map(Color::describe).ifPresent(System.out::println);
		System.out.println(THEME + ": " + label + ", " + palette.count() + " colors, " + (args.length > 0));
	}
}
