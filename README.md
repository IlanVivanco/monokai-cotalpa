# Monokai Cotalpa Theme for VS Code

[![Version](https://img.shields.io/visual-studio-marketplace/v/ilanvivanco.cotalpa?labelColor=545f62&color=6b7678&style=flat-square&label=Version)](https://marketplace.visualstudio.com/items?itemName=ilanvivanco.cotalpa) [![Downloads](https://img.shields.io/visual-studio-marketplace/d/ilanvivanco.cotalpa?labelColor=545f62&color=6b7678&style=flat-square&label=Downloads)](https://marketplace.visualstudio.com/items?itemName=ilanvivanco.cotalpa)

🎨 Yet another Monokai color scheme for VS Code.

![Preview](https://raw.githubusercontent.com/IlanVivanco/monokai-cotalpa/master/images/screenshot.png)

# Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Cotalpa` - find the one by **Ilán Vivanco**
3. Click **Install** to install it.
4. Click **Reload** to reload the your editor
5. Code > Preferences > Color Theme > **Monokai Cotalpa**
6. Enjoy

## Extras

If you happen to use the [Bracket Pair Colorizer 2](https://github.com/CoenraadS/Bracket-Pair-Colorizer-2) plugin, you can add these to your `settings.json` to match the theme.

```
    "bracket-pair-colorizer-2.highlightActiveScope" : true,
    "bracket-pair-colorizer-2.colors" : [
        "#d3ad35",
        "#4269db",
        "#41ed56",
    ]
```

## If you don't like something

First, this theme is new so if something is funky, please open an issue.
If you would like to change something, you can either open a PR and see if I'd like it added, or override the colors in your own settings.json file.

https://code.visualstudio.com/docs/getstarted/theme-color-reference

## Color reference

| Color         |                                    HEX                                    |         HSL          |
| :------------ | :-----------------------------------------------------------------------: | :------------------: |
| **Red**       | ![#fc988d](https://via.placeholder.com/13/fc988d/000000?text=+) _#fc988d_ |  _hsl(6, 95%, 77%)_  |
| **Orange**    | ![#fcbb86](https://via.placeholder.com/13/fcbb86/000000?text=+) _#fcbb86_ | _hsl(27, 95%, 76%)_  |
| **Yellow**    | ![#fcdc7d](https://via.placeholder.com/13/fcdc7d/000000?text=+) _#fcdc7d_ | _hsl(45, 95%, 74%)_  |
| **Green**     | ![#99d874](https://via.placeholder.com/13/99d874/000000?text=+) _#99d874_ | _hsl(98, 56%, 65%)_  |
| **Teal**      | ![#2cca98](https://via.placeholder.com/13/2cca98/000000?text=+) _#63ddb6_ | _hsl(161, 64%, 63%_) |
| **Cyan**      | ![#66d6fb](https://via.placeholder.com/13/66d6fb/000000?text=+) _#66d6fb_ | _hsl(195, 95%, 69%_) |
| **Blue**      | ![#74b8fc](https://via.placeholder.com/13/74b8fc/000000?text=+) _#74b8fc_ | _hsl(210, 96%, 72%_) |
| **Purple**    | ![#b2aafa](https://via.placeholder.com/13/b2aafa/000000?text=+) _#b2aafa_ | _hsl(246, 89%, 82%_) |
| **Magenta**   | ![#e27fb1](https://via.placeholder.com/13/e27fb1/000000?text=+) _#e27fb1_ | _hsl(330, 63%, 69%_) |
|               |                                                                           |                      |
| **Black**     | ![#060809](https://via.placeholder.com/13/060809/000000?text=+) _#060809_ | _hsl(200, 20%, 3%)_  |
| **Dark gray** | ![#273136](https://via.placeholder.com/13/273136/000000?text=+) _#273136_ | _hsl(200, 16%, 18%_) |
| **Gray**      | ![#8e9a9e](https://via.placeholder.com/13/8e9a9e/000000?text=+) _#8e9a9e_ | _hsl(195, 8%, 59%)_  |
| **White**     | ![#fffff](https://via.placeholder.com/13/ffffff/000000?text=+) _#f7f8f9_  | _hsl(210, 14%, 97%_) |

## Font style

I recommend using a monospaced font containing ligatures like [Cascadia Code](https://github.com/microsoft/cascadia-code) or [Fira Code](https://github.com/tonsky/FiraCode).

```json
"editor.fontFamily": "'Cascadia Code', 'Fira Code', Consolas, monospace",
```

Also, if you want to enable the Cursive form of the italic just remember to also add this:

```json
"editor.fontLigatures": "'ss01', 'calt'",
```

![Italic style](https://raw.githubusercontent.com/IlanVivanco/monokai-cotalpa/master/images/italic.jpg)
