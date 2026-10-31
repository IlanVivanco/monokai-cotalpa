// Small palette helpers, to try the theme with C#.
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Cotalpa.Themes;

public enum Variant { Main, Dark, Coffee }

public interface IDescribable
{
	string Describe();
}

public record Color(string Name, string Hex, double Alpha = 1.0) : IDescribable
{
	private static readonly Regex HexPattern = new(@"^#(?:[0-9a-f]{3}){1,2}$", RegexOptions.IgnoreCase);

	public bool IsValid => HexPattern.IsMatch(Hex);

	public string Describe() => $"{Name} is {Hex} at {Alpha:P0}";
}

[Serializable]
public sealed class Palette<T> where T : IDescribable
{
	public const string Theme = "Monokai Cotalpa";
	private readonly Dictionary<string, T> _colors = new();

	public Variant Variant { get; init; } = Variant.Main;
	public int Count => _colors.Count;

	public void Add(string key, T color)
	{
		ArgumentNullException.ThrowIfNull(color);
		_colors[key] = color;
	}

	public async Task<IEnumerable<string>> DescribeAllAsync()
	{
		await Task.Delay(10);
		return _colors.Values.Select(c => c.Describe()).Where(text => !string.IsNullOrEmpty(text));
	}
}

public static class Program
{
	public static async Task Main(string[] args)
	{
		var palette = new Palette<Color> { Variant = Variant.Coffee };
		palette.Add("yellow", new Color("yellow", "#fcdc7d"));
		palette.Add("red", new Color("red", "#fc988d", 0.8));

		foreach (var line in await palette.DescribeAllAsync())
		{
			Console.WriteLine(line);
		}

		object? missing = null;
		Console.WriteLine(missing is null ? $"{Palette<Color>.Theme}: {palette.Count} colors" : "unreachable");
	}
}
