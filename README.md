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

## If you don't like something

First, this theme is new so if something is funky, please open an issue.
If you would like to change something, you can either open a PR and see if I'd like it added, or override the colors in your own settings.json file.

https://code.visualstudio.com/docs/getstarted/theme-color-reference

## Color reference

| Color         |                                    HEX                                    |         HSL          |
| :------------ | :-----------------------------------------------------------------------: | :------------------: |
| **Red**       | ![#fc988d](https://via.placeholder.com/15/fc988d/fc988d.png) `#fc988d` |  _hsl(6, 95%, 77%)_  |
| **Orange**    | ![#fcbb86](https://via.placeholder.com/15/fcbb86/fcbb86.png) `#fcbb86` | _hsl(27, 95%, 76%)_  |
| **Yellow**    | ![#fcdc7d](https://via.placeholder.com/15/fcdc7d/fcdc7d.png) `#fcdc7d` | _hsl(45, 95%, 74%)_  |
| **Green**     | ![#99d874](https://via.placeholder.com/15/99d874/99d874.png) `#99d874` | _hsl(98, 56%, 65%)_  |
| **Teal**      | ![#2cca98](https://via.placeholder.com/15/2cca98/2cca98.png) `#63ddb6` | _hsl(161, 64%, 63%_) |
| **Cyan**      | ![#66d6fb](https://via.placeholder.com/15/66d6fb/66d6fb.png) `#66d6fb` | _hsl(195, 95%, 69%_) |
| **Blue**      | ![#74b8fc](https://via.placeholder.com/15/74b8fc/74b8fc.png) `#74b8fc` | _hsl(210, 96%, 72%_) |
| **Purple**    | ![#b2aafa](https://via.placeholder.com/15/b2aafa/b2aafa.png) `#b2aafa` | _hsl(246, 89%, 82%_) |
| **Magenta**   | ![#e27fb1](https://via.placeholder.com/15/e27fb1/e27fb1.png) `#e27fb1` | _hsl(330, 63%, 69%_) |
|               |                                                                           |                      |
| **Black**     | ![#060809](https://via.placeholder.com/15/060809/060809.png) `#060809` | _hsl(200, 20%, 3%)_  |
| **Dark gray** | ![#273136](https://via.placeholder.com/15/273136/273136.png) `#273136` | _hsl(200, 16%, 18%_) |
| **Gray**      | ![#8e9a9e](https://via.placeholder.com/15/8e9a9e/8e9a9e.png) `#8e9a9e` | _hsl(195, 8%, 59%)_  |
| **White**     | ![#fffff](https://via.placeholder.com/15/ffffff/ffffff.png) `#f7f8f9`  | _hsl(210, 14%, 97%_) |

## Font style

I recommend using a monospaced font containing ligatures like [Cascadia Code](https://github.com/microsoft/cascadia-code) or [Fira Code](https://github.com/tonsky/FiraCode).

```json
"editor.fontFamily": "'Cascadia Code', 'Fira Code', Consolas, monospace",
```

Also, if you want to enable the Cursive form of the italic just remember to also add this:

```json
"editor.fontLigatures": "'ss01', 'calt'",
```

![Italic style](https://raw.githubusercontent.com/IlanVivanco/monokai-cotalpa/dynamic-theme/images/italic.jpg)

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
