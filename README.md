# Monokai Cotalpa Theme for VS Code

[![Version](https://img.shields.io/visual-studio-marketplace/v/ilanvivanco.cotalpa?labelColor=545f62&color=6b7678&style=flat-square&label=Version)](https://marketplace.visualstudio.com/items?itemName=ilanvivanco.cotalpa) [![Downloads](https://img.shields.io/visual-studio-marketplace/d/ilanvivanco.cotalpa?labelColor=545f62&color=6b7678&style=flat-square&label=Downloads)](https://marketplace.visualstudio.com/items?itemName=ilanvivanco.cotalpa)

🎨 Yet another Monokai color scheme for VS Code.

![Preview](https://raw.githubusercontent.com/IlanVivanco/monokai-cotalpa/main/images/screenshot.png)

## Installation

1. Open the **Extensions** view (`Ctrl+Shift+X`, or `Cmd+Shift+X` on macOS).
2. Search for `Cotalpa` and install the one by **Ilán Vivanco**.
3. Open the theme picker (`Ctrl+K Ctrl+T`, or `Cmd+K Cmd+T` on macOS) and choose **Monokai Cotalpa**.

You can also install it from the command line:

```sh
code --install-extension ilanvivanco.cotalpa
```

## Variants

Every variant comes with an italic version, for example **Monokai Cotalpa Coffee Italic**.

- **Monokai Cotalpa**: the main theme.
- **Monokai Cotalpa Dark**: the same colors on darker backgrounds.
- **Monokai Cotalpa Coffee**: warm, coffee-toned grays.

![Main, Dark and Coffee variants](https://raw.githubusercontent.com/IlanVivanco/monokai-cotalpa/main/images/variants.png)

The theme also covers the newer parts of VS Code: the modern layout, chat, the source control graph, the terminal, symbol icons and more. Semantic highlighting is on, and it uses the same colors as the syntax highlighting.

## Customization

If something doesn't look right to you, please [open an issue](https://github.com/IlanVivanco/monokai-cotalpa/issues). You can also override any color in your `settings.json`. The `[Monokai Cotalpa*]` selector applies the change to every variant:

```json
"workbench.colorCustomizations": {
	"[Monokai Cotalpa*]": {
		"editor.background": "#1e2223"
	}
},
"editor.tokenColorCustomizations": {
	"[Monokai Cotalpa*]": {
		"comments": "#8e9a9e"
	}
}
```

See the [theme color reference](https://code.visualstudio.com/api/references/theme-color) for every color you can change. To turn off semantic highlighting, set `"editor.semanticHighlighting.enabled": false`.

## Color reference

| Color         |                                  HEX                                   |         HSL          |
| :------------ | :--------------------------------------------------------------------: | :------------------: |
| **Red**       | ![#fc988d](https://via.placeholder.com/15/fc988d/fc988d.png) `#fc988d` |  _hsl(6, 95%, 77%)_  |
| **Orange**    | ![#fcbb86](https://via.placeholder.com/15/fcbb86/fcbb86.png) `#fcbb86` | _hsl(27, 95%, 76%)_  |
| **Yellow**    | ![#fcdc7d](https://via.placeholder.com/15/fcdc7d/fcdc7d.png) `#fcdc7d` | _hsl(45, 95%, 74%)_  |
| **Green**     | ![#99d874](https://via.placeholder.com/15/99d874/99d874.png) `#99d874` | _hsl(98, 56%, 65%)_  |
| **Teal**      | ![#63ddb6](https://via.placeholder.com/15/63ddb6/63ddb6.png) `#63ddb6` | _hsl(161, 64%, 63%)_ |
| **Cyan**      | ![#66d6fb](https://via.placeholder.com/15/66d6fb/66d6fb.png) `#66d6fb` | _hsl(195, 95%, 69%)_ |
| **Blue**      | ![#74b8fc](https://via.placeholder.com/15/74b8fc/74b8fc.png) `#74b8fc` | _hsl(210, 96%, 72%)_ |
| **Purple**    | ![#b2aafa](https://via.placeholder.com/15/b2aafa/b2aafa.png) `#b2aafa` | _hsl(246, 89%, 82%)_ |
| **Magenta**   | ![#e27fb1](https://via.placeholder.com/15/e27fb1/e27fb1.png) `#e27fb1` | _hsl(330, 63%, 69%)_ |
|               |                                                                        |                      |
| **Black**     | ![#060809](https://via.placeholder.com/15/060809/060809.png) `#060809` | _hsl(200, 20%, 3%)_  |
| **Dark gray** | ![#273136](https://via.placeholder.com/15/273136/273136.png) `#273136` | _hsl(200, 16%, 18%)_ |
| **Gray**      | ![#8e9a9e](https://via.placeholder.com/15/8e9a9e/8e9a9e.png) `#8e9a9e` | _hsl(195, 8%, 59%)_  |
| **White**     | ![#f7f8f9](https://via.placeholder.com/15/f7f8f9/f7f8f9.png) `#f7f8f9` | _hsl(210, 14%, 97%)_ |

## Font style

I recommend a monospaced font with ligatures, like [Cascadia Code](https://github.com/microsoft/cascadia-code) or [Fira Code](https://github.com/tonsky/FiraCode).

```json
"editor.fontFamily": "'Cascadia Code', 'Fira Code', Consolas, monospace",
```

With Cascadia Code and the italic variants, you can also turn on its cursive italic:

```json
"editor.fontLigatures": "'ss01', 'calt'",
```

![Italic style](https://raw.githubusercontent.com/IlanVivanco/monokai-cotalpa/main/images/italic.jpg)

## Development

The themes are generated from `src/`: the palette, the color scheme, the variants and the rules for the workbench, the syntax and semantic tokens.

```sh
npm install
npm run build        # generates themes/ and the theme list in package.json
npm run watch        # rebuilds on every change in src/
npm run validate     # checks the rules against the VS Code theme color reference
npm run screenshots  # takes screenshots of the themes in VS Code, in screenshots/
npm run package      # builds the .vsix
```

To try your changes, press `F5` to open a VS Code window with the extension and the `demo/` files. In that window VS Code always starts with the first theme, so pick the variant you want to test from the theme picker.
