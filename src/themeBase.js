import { alpha } from './utils/color.js'
import { color } from './colors.js'

export const themeBase = {
	// VSCode Theme Color reference.
	// https://code.visualstudio.com/docs/getstarted/theme-color-reference
	name: 'Monokai Cotalpa',
	author: 'Ilán Vivanco',
	type: 'dark',
	$schema: 'vscode://schemas/color-theme',
	colorSpaceName: 'sRGB',

	colors: {
		// Activity bar
		// https://code.visualstudio.com/api/references/theme-color#activity-bar
		'activityBar.activeBackground': alpha(color.green, 0.1),
		'activityBar.activeBorder': color.yellow,
		'activityBar.background': color.gray9,
		'activityBar.border': color.gray9,
		'activityBar.foreground': color.gray2,
		'activityBar.inactiveForeground': color.gray5,
		'activityBarBadge.background': color.yellow,
		'activityBarBadge.foreground': color.gray7,

		'badge.background': color.yellow,
		'badge.foreground': color.gray7,

		'breadcrumb.activeSelectionForeground': color.gray1,
		'breadcrumb.focusForeground': color.gray2,
		'breadcrumb.foreground': color.gray3,

		'button.background': color.gray6,
		'button.foreground': color.gray3,
		'button.hoverBackground': color.gray7,

		'debugExceptionWidget.background': color.gray6,
		'debugExceptionWidget.border': color.gray7,
		'debugToolBar.background': color.gray6,
		'descriptionForeground': color.gray3,

		'diffEditor.insertedTextBackground': alpha(color.green, 0.1),
		'diffEditor.insertedTextBorder': alpha(color.gray9, 0),
		'diffEditor.removedTextBackground': alpha(color.red, 0.1),
		'diffEditor.removedTextBorder': alpha(color.gray9, 0),

		'dropdown.background': color.gray7,
		'dropdown.border': color.gray7,
		'dropdown.foreground': color.gray3,
		'dropdown.listBackground': color.gray6,

		'editor.background': color.gray7,
		'editor.findMatchBackground': alpha(color.gray1, 0.15),
		'editor.findMatchBorder': color.yellow,
		'editor.findMatchHighlightBackground': alpha(color.gray1, 0.15),
		'editor.findMatchHighlightBorder': alpha(color.gray9, 0),
		'editor.findRangeHighlightBackground': alpha(color.gray1, 0.05),
		'editor.findRangeHighlightBorder': alpha(color.gray9, 0),
		'editor.foreground': color.gray1,
		'editor.hoverHighlightBackground': alpha(color.gray1, 0.05),
		'editor.inactiveSelectionBackground': alpha(color.gray1, 0.05),
		'editor.lineHighlightBackground': alpha(color.gray1, 0.05),
		'editor.lineHighlightBorder': alpha(color.gray9, 0),
		'editor.rangeHighlightBackground': color.gray6,
		'editor.rangeHighlightBorder': color.gray6,
		'editor.selectionBackground': alpha(color.gray2, 0.15),
		'editor.selectionHighlightBackground': alpha(color.gray1, 0.15),
		'editor.selectionHighlightBorder': alpha(color.gray9, 0),
		'editor.wordHighlightBackground': alpha(color.gray1, 0.15),
		'editor.wordHighlightBorder': alpha(color.gray9, 0),
		'editor.wordHighlightStrongBackground': alpha(color.gray1, 0.15),
		'editor.wordHighlightStrongBorder': alpha(color.gray9, 0),

		'editorBracketMatch.background': color.gray7,
		'editorBracketMatch.border': color.gray4,

		'editorCodeLens.foreground': color.gray4,

		'editorCursor.background': color.gray7,
		'editorCursor.foreground': color.gray1,

		'editorError.border': alpha(color.gray9, 0),
		'editorError.foreground': color.red,
		'editorGroup.border': color.gray8,
		'editorGroup.dropBackground': alpha(color.gray8, 0.75),
		'editorGroup.emptyBackground': color.gray9,
		'editorGroup.focusedEmptyBorder': color.gray8,

		'editorGroupHeader.noTabsBackground': color.gray7,
		'editorGroupHeader.tabsBackground': color.gray7,
		'editorGroupHeader.tabsBorder': color.gray7,

		'editorGutter.addedBackground': color.green,
		'editorGutter.background': color.gray7,
		'editorGutter.deletedBackground': color.red,
		'editorGutter.modifiedBackground': color.orange,

		'editorHint.border': color.gray7,
		'editorHint.foreground': color.violet,

		'editorHoverWidget.background': color.gray6,
		'editorHoverWidget.border': color.gray7,

		'editorIndentGuide.background': color.gray6,

		'editorInfo.border': color.gray7,
		'editorInfo.foreground': color.blue,

		'editorLineNumber.activeForeground': color.gray2,
		'editorLineNumber.foreground': color.gray5,
		'editorLink.activeForeground': color.blue,

		'editorMarkerNavigation.background': color.gray6,
		'editorMarkerNavigationError.background': color.red,
		'editorMarkerNavigationInfo.background': color.blue,
		'editorMarkerNavigationWarning.background': color.orange,

		'editorOverviewRuler.addedForeground': color.green,
		'editorOverviewRuler.border': color.gray7,
		'editorOverviewRuler.currentContentForeground': color.gray6,
		'editorOverviewRuler.deletedForeground': color.red,
		'editorOverviewRuler.errorForeground': color.red,
		'editorOverviewRuler.findMatchForeground': alpha(color.gray1, 0.15),
		'editorOverviewRuler.incomingContentForeground': color.gray6,
		'editorOverviewRuler.infoForeground': color.blue,
		'editorOverviewRuler.modifiedForeground': color.orange,
		'editorOverviewRuler.rangeHighlightForeground': alpha(color.gray1, 0.15),
		'editorOverviewRuler.selectionHighlightForeground': alpha(color.gray1, 0.15),
		'editorOverviewRuler.warningForeground': color.orange,
		'editorOverviewRuler.wordHighlightForeground': alpha(color.gray1, 0.15),
		'editorOverviewRuler.wordHighlightStrongForeground': alpha(color.gray1, 0.15),

		'editorPane.background': color.gray7,

		'editorRuler.foreground': color.gray5,

		'editorSuggestWidget.background': color.gray6,
		'editorSuggestWidget.border': color.gray6,
		'editorSuggestWidget.foreground': color.gray2,
		'editorSuggestWidget.highlightForeground': color.gray1,
		'editorSuggestWidget.selectedBackground': color.gray4,

		'editorWarning.border': alpha(color.gray9, 0),
		'editorWarning.foreground': color.orange,

		'editorWhitespace.foreground': color.gray5,

		'editorWidget.background': color.gray6,
		'editorWidget.border': color.gray6,

		'errorForeground': color.red,

		'extensionButton.prominentBackground': color.gray6,
		'extensionButton.prominentForeground': color.gray1,
		'extensionButton.prominentHoverBackground': color.gray5,

		'focusBorder': color.gray4,
		'foreground': color.gray1,

		'gitDecoration.conflictingResourceForeground': color.orange,
		'gitDecoration.deletedResourceForeground': color.red,
		'gitDecoration.ignoredResourceForeground': color.gray5,
		'gitDecoration.modifiedResourceForeground': color.green,
		'gitDecoration.untrackedResourceForeground': color.orange,

		'input.background': color.gray6,
		'input.border': color.gray6,
		'input.foreground': color.gray1,
		'input.placeholderForeground': color.gray4,
		'inputOption.activeBackground': color.gray5,
		'inputOption.activeBorder': color.gray5,
		'inputValidation.errorBackground': color.gray6,
		'inputValidation.errorBorder': color.red,
		'inputValidation.errorForeground': color.red,
		'inputValidation.infoBackground': color.gray6,
		'inputValidation.infoBorder': color.blue,
		'inputValidation.infoForeground': color.blue,
		'inputValidation.warningBackground': color.gray6,
		'inputValidation.warningBorder': color.orange,
		'inputValidation.warningForeground': color.orange,

		'list.activeSelectionBackground': color.gray7,
		'list.activeSelectionForeground': color.yellow,
		'list.dropBackground': alpha(color.gray8, 0.75),
		'list.errorForeground': color.red,
		'list.focusBackground': color.gray7,
		'list.focusForeground': color.gray1,
		'list.highlightForeground': color.gray1,
		'list.hoverBackground': color.gray8,
		'list.hoverForeground': color.gray1,
		'list.inactiveFocusBackground': color.gray7,
		'list.inactiveSelectionBackground': color.gray7,
		'list.inactiveSelectionForeground': color.yellow,
		'list.invalidItemForeground': color.red,
		'list.warningForeground': color.orange,

		'listFilterWidget.background': color.gray7,
		'listFilterWidget.noMatchesOutline': color.red,
		'listFilterWidget.outline': color.gray7,

		'merge.border': color.gray7,
		'merge.commonContentBackground': alpha(color.gray1, 0.1),
		'merge.commonHeaderBackground': alpha(color.gray1, 0.15),
		'merge.currentContentBackground': alpha(color.red, 0.1),
		'merge.currentHeaderBackground': alpha(color.red, 0.15),
		'merge.incomingContentBackground': alpha(color.green, 0.1),
		'merge.incomingHeaderBackground': alpha(color.green, 0.15),

		'notificationCenter.border': color.gray6,
		'notificationCenterHeader.background': color.gray6,
		'notificationCenterHeader.foreground': color.gray3,

		'notificationLink.foreground': color.yellow,

		'notificationToast.border': color.gray6,

		'notifications.background': color.gray6,
		'notifications.border': color.gray6,
		'notifications.foreground': color.gray2,

		'panel.background': color.gray6,
		'panel.border': color.gray7,

		'panelTitle.activeBorder': color.yellow,
		'panelTitle.activeForeground': color.yellow,
		'panelTitle.inactiveForeground': color.gray3,

		'peekView.border': color.gray7,

		'peekViewEditor.background': color.gray6,
		'peekViewEditor.matchHighlightBackground': color.gray5,

		'peekViewEditorGutter.background': color.gray6,

		'peekViewResult.background': color.gray6,
		'peekViewResult.fileForeground': color.gray3,
		'peekViewResult.lineForeground': color.gray3,
		'peekViewResult.matchHighlightBackground': color.gray5,
		'peekViewResult.selectionBackground': color.gray6,
		'peekViewResult.selectionForeground': color.gray1,

		'peekViewTitle.background': color.gray6,
		'peekViewTitleDescription.foreground': color.gray3,

		'peekViewTitleLabel.foreground': color.gray1,

		'pickerGroup.border': color.gray7,
		'pickerGroup.foreground': color.gray5,

		'progressBar.background': color.gray6,

		'sash.hoverBorder': color.yellow,

		'scrollbar.shadow': color.gray7,

		'scrollbarSlider.activeBackground': alpha(color.gray1, 0.05),
		'scrollbarSlider.background': alpha(color.gray1, 0.05),
		'scrollbarSlider.hoverBackground': alpha(color.gray1, 0.05),

		'selection.background': alpha(color.gray2, 0.15),

		'settings.checkboxBackground': color.gray6,
		'settings.checkboxBorder': color.gray6,
		'settings.checkboxForeground': color.gray1,
		'settings.dropdownBackground': color.gray6,
		'settings.dropdownBorder': color.gray6,
		'settings.dropdownForeground': color.gray1,
		'settings.dropdownListBorder': color.gray3,
		'settings.headerForeground': color.yellow,
		'settings.modifiedItemIndicator': color.yellow,
		'settings.numberInputBackground': color.gray6,
		'settings.numberInputBorder': color.gray6,
		'settings.numberInputForeground': color.gray1,
		'settings.textInputBackground': color.gray6,
		'settings.textInputBorder': color.gray6,
		'settings.textInputForeground': color.gray1,

		'sideBar.background': color.gray8,
		'sideBar.border': color.gray9,
		'sideBar.dropBackground': alpha(color.gray8, 0.75),
		'sideBar.foreground': color.gray3,

		'sideBarSectionHeader.background': color.gray8,
		'sideBarSectionHeader.foreground': color.gray4,

		'sideBarTitle.foreground': color.gray5,

		'statusBar.background': color.gray9,
		'statusBar.border': color.gray8,
		'statusBar.debuggingBackground': color.orange,
		'statusBar.debuggingBorder': color.gray8,
		'statusBar.debuggingForeground': color.gray4,
		'statusBar.foreground': color.gray4,
		'statusBar.noFolderBackground': color.gray8,
		'statusBar.noFolderBorder': color.gray9,
		'statusBar.noFolderForeground': color.gray4,

		'statusBarItem.activeBackground': color.gray7,
		'statusBarItem.hoverBackground': alpha(color.gray7, 0.15),
		'statusBarItem.prominentBackground': color.gray6,
		'statusBarItem.prominentHoverBackground': color.gray6,

		'tab.activeBackground': color.gray7,
		'tab.activeBorder': color.yellow,
		'tab.activeForeground': color.yellow,
		'tab.activeModifiedBorder': color.gray5,
		'tab.border': color.gray7,
		'tab.hoverBackground': color.gray7,
		'tab.hoverBorder': color.gray5,
		'tab.inactiveBackground': color.gray7,
		'tab.inactiveForeground': color.gray3,
		'tab.inactiveModifiedBorder': color.gray5,
		'tab.unfocusedActiveBorder': color.gray3,
		'tab.unfocusedActiveForeground': color.gray2,
		'tab.unfocusedActiveModifiedBorder': color.gray6,
		'tab.unfocusedHoverBackground': color.gray7,
		'tab.unfocusedHoverBorder': color.gray7,
		'tab.unfocusedInactiveForeground': color.gray3,
		'tab.unfocusedInactiveModifiedBorder': color.gray6,

		'terminal.ansiBlack': color.gray6,
		'terminal.ansiBlue': color.orange,
		'terminal.ansiBrightBlack': color.gray4,
		'terminal.ansiBrightBlue': color.orange,
		'terminal.ansiBrightCyan': color.blue,
		'terminal.ansiBrightGreen': color.green,
		'terminal.ansiBrightMagenta': color.violet,
		'terminal.ansiBrightRed': color.red,
		'terminal.ansiBrightWhite': color.gray1,
		'terminal.ansiBrightYellow': color.yellow,
		'terminal.ansiCyan': color.blue,
		'terminal.ansiGreen': color.green,
		'terminal.ansiMagenta': color.violet,
		'terminal.ansiRed': color.red,
		'terminal.ansiWhite': color.gray1,
		'terminal.ansiYellow': color.yellow,
		'terminal.background': color.gray6,
		'terminal.foreground': color.gray1,
		'terminal.selectionBackground': alpha(color.gray1, 0.15),

		'terminalCursor.background': alpha(color.gray9, 0),
		'terminalCursor.foreground': color.gray1,

		'textBlockQuote.background': color.gray6,
		'textBlockQuote.border': color.gray6,

		'textCodeBlock.background': color.gray6,

		'textLink.activeForeground': color.gray1,
		'textLink.foreground': color.yellow,

		'textPreformat.foreground': color.gray1,

		'textSeparator.foreground': color.gray4,

		'titleBar.activeBackground': color.gray8,
		'titleBar.activeForeground': color.gray3,
		'titleBar.border': color.gray9,
		'titleBar.inactiveBackground': color.gray8,
		'titleBar.inactiveForeground': color.gray5,

		'walkThrough.embeddedEditorBackground': color.gray8,

		'welcomePage.buttonBackground': color.gray6,
		'welcomePage.buttonHoverBackground': color.gray5,

		'widget.shadow': color.gray9,
	},
	tokenColors: [
		{
			scope: [
				'comment',
				'comment markup.underline.link',
				'comment string',
				'comment punctuation',
				'comment punctuation.definition',
				'comment text',
			],
			settings: {
				fontStyle: 'italic',
				foreground: color.gray4,
			},
		},
		{
			scope: ['source.php comment.block.documentation.phpdoc.php meta.other.type.phpdoc.php'],
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'comment storage.type',
			settings: {
				foreground: color.gray4,
			},
		},
		{
			scope: 'comment entity.name.type',
			settings: {
				foreground: color.gray2,
			},
		},
		{
			scope: ['comment variable', 'comment variable.other'],
			settings: {
				foreground: color.gray2,
			},
		},
		{
			scope: 'comment keyword.codetag.notation',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'comment.git-status.header.remote',
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'comment.git-status.header.local',
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'comment.other.git-status.head',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'constant',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.other',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'constant.other.php',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.other.property',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.other.citation.latex',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.other.color',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.other.character-class.escape',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.other.key',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.other.symbol',
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: 'constant.numeric',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.language',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.character.escape',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'constant.numeric.line-number.find-in-files',
			settings: {
				foreground: color.gray5,
			},
		},
		{
			scope: 'constant.numeric.line-number.match.find-in-files',
			settings: {
				foreground: color.yellow,
			},
		},
		{
			scope: 'entity.name.section',
			settings: {
				foreground: color.yellow,
			},
		},
		{
			scope: ['entity.name.function', 'entity.name.function.templated'],
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: 'entity.name.function.member.static',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: ['entity.name.type.class.templated', 'entity.name.type.class.generic', 'entity.name.type.namespace'],
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'entity.name.label',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'entity.name.function.preprocessor',
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'entity.name',
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: 'entity.name.class',
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'entity.name.constant',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'entity.name.namespace',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'entity.other.inherited-class',
			settings: {
				fontStyle: 'italic',
				foreground: color.blue,
			},
		},
		{
			scope: 'entity.name.function',
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: [
				'entity.name.tag',
				'entity.name.tag.js.jsx support.class.component.js.jsx',
				'entity.name.tag support.class.component',
			],
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'entity.name.function.operator',
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: ['entity.name.type', 'entity.name.type.class.reference', 'entity.name.type.class.value'],
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'entity.other.attribute-name',
			settings: {
				fontStyle: 'italic',
				foreground: color.blue,
			},
		},
		{
			scope: [
				'entity.other.attribute-name.class.css',
				'entity.other.attribute-name.parent-selector-suffix.css',
				'entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css',
				'entity.other.attribute-name.css',
			],
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: 'entity.other.attribute-name.id.css',
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: [
				'entity.other.attribute-name.pseudo-class.css',
				'entity.other.pseudo-class.css',
				'entity.other.pseudo-element.css',
			],
			settings: {
				fontStyle: 'italic',
				foreground: color.blue,
			},
		},
		{
			scope: ['entity.name.function', 'support.function'],
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: 'entity.other.git-status.hex',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'entity.other.jinja2.delimiter',
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: 'entity.name.operator.custom-literal',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'entity.name.operator.custom-literal.string',
			settings: {
				foreground: color.yellow,
			},
		},
		{
			scope: 'entity.name.operator.custom-literal.number',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'invalid',
			settings: {},
		},
		{
			scope: 'keyword.control',
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'keyword.control.directive',
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: ['keyword.operator', 'keyword.operator.member', 'keyword.operator.new'],
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'keyword.other.substitution',
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: ['keyword.other.template.begin', 'keyword.other.template.end'],
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: [
				'keyword.operator.heading.restructuredtext',
				'keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext',
			],
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: 'markup.italic',
			settings: {
				fontStyle: 'italic',
			},
		},
		{
			scope: 'markup.bold',
			settings: {
				fontStyle: 'bold',
			},
		},
		{
			scope: 'markup.heading',
			settings: {
				foreground: color.yellow,
			},
		},
		{
			scope: 'markup.raw',
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: 'markup.underline',
			settings: {
				fontStyle: 'underline',
			},
		},
		{
			scope: 'markup.underline.link',
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: ['markup.inserted', 'markup.inserted punctuation.definition.inserted'],
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: ['markup.deleted', 'markup.deleted punctuation.definition.deleted'],
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: ['markup.changed', 'markup.changed punctuation.definition.changed'],
			settings: {
				foreground: color.yellow,
			},
		},
		{
			scope: ['markup.ignored', 'markup.ignored punctuation.definition.ignored'],
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: 'markup.untracked',
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: 'markup.quote',
			settings: {
				fontStyle: 'italic',
			},
		},
		{
			scope: [
				'meta.brace.round',
				'meta.brace.square',
				'meta.brace.curly',
				'meta.delimiter.comma.js',
				'meta.function-call.without-arguments.js',
				'meta.function-call.method.without-arguments.js',
			],
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: ['meta.function-call.python', 'meta.function-call.arguments.python meta.function-call.python'],
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: 'meta.function-call.python meta.function-call.arguments.python',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'meta.instance.constructor',
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: ['meta.attribute-with-value.class string', 'meta.attribute.class.html string'],
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: ['meta.attribute-with-value.id string', 'meta.attribute.id.html string'],
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: [
				'source.json meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary',
				'source.json meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
				'source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string',
			],
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: [
				'source.json meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
				'source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string',
			],
			settings: {
				foreground: color.yellow,
			},
		},
		{
			scope: ['meta.object.member', 'variable.other meta.objectliteral meta.object.member'],
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'meta.object-literal.key',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'meta.property-list.css variable.other',
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: ['entity.name.constant.preprocessor', 'meta.preprocessor'],
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'meta.diff.git-diff.header',
			settings: {
				foreground: color.yellow,
			},
		},
		{
			scope: 'punctuation',
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: [
				'punctuation.definition.tag',
				'punctuation.definition.tag source',
				'punctuation.definition.group.begin.ruby',
				'punctuation.definition.group.end.ruby',
				'punctuation.definition.group.begin.css',
				'punctuation.definition.group.end.css',
				'punctuation.definition.string.end.html source.css',
			],
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: 'punctuation.definition.group',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'punctuation.definition.comment',
			settings: {
				foreground: color.gray4,
			},
		},
		{
			scope: [
				'punctuation.definition.variable',
				'punctuation.definition.keyword.scss',
				'punctuation.definition.entity.css',
			],
			settings: {
				foreground: color.gray2,
			},
		},
		{
			scope: [
				'punctuation.section.embedded',
				'punctuation.section.embedded entity.name.tag',
				'punctuation.section.embedded constant.other',
				'punctuation.section.embedded source',
			],
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: [
				'punctuation.template-string.element.begin',
				'punctuation.template-string.element.end',
				'punctuation.definition.string.template.begin',
				'punctuation.definition.string.template.end',
				'string.quoted.template punctuation.definition.string.begin',
				'string.quoted.template punctuation.definition.string.end',
			],
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: ['markup.inline.raw'],
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'region.redish',
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'region.orangish',
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: 'region.yellowish',
			settings: {
				foreground: color.yellow,
			},
		},
		{
			scope: 'region.greenish',
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: 'region.bluish',
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'region.purplish',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'region.pinkish',
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'region.whitish',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'source',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: ['source.scss', 'source.sass'],
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: [
				'source.sass variable.other',
				'source.sass variable.sass',
				'source.scss variable.other',
				'source.scss variable.scss',
				'source.scss variable.sass',
				'source.css variable.other',
				'source.css variable.scss',
				'source.less variable.other',
				'source.less variable.other.less',
				'source.less variable.declaration.less',
			],
			settings: {
				fontStyle: 'italic',
				foreground: color.orange,
			},
		},
		{
			scope: 'source.git-show.commit.sha',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: [
				'source.git-show.author',
				'source.git-show.date',
				'source.git-diff.command',
				'source.git-diff.command meta.diff.git-diff.header.from-file',
				'source.git-diff.command meta.diff.git-diff.header.to-file',
			],
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: [
				'source.git-show meta.diff.git-diff.header.extended.index.from-sha',
				'source.git-show meta.diff.git-diff.header.extended.index.to-sha',
			],
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'source.git-show meta.diff.range.unified',
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: ['source.git-show meta.diff.header.from-file', 'source.git-show meta.diff.header.to-file'],
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: 'storage',
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'storage.type',
			settings: {
				fontStyle: 'italic',
				foreground: color.blue,
			},
		},
		{
			scope: 'storage.type.extends',
			settings: {
				fontStyle: '',
				foreground: color.red,
			},
		},
		{
			scope: 'storage.type.function.arrow',
			settings: {
				fontStyle: '',
				foreground: color.red,
			},
		},
		{
			scope: ['storage.modifier', 'storage.type.modifier'],
			settings: {
				fontStyle: 'italic',
				foreground: color.red,
			},
		},
		{
			scope: 'storage.class.restructuredtext.ref',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'string',
			settings: {
				foreground: color.yellow,
			},
		},
		{
			scope: 'string.unquoted.label',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'string source',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'string source punctuation.section.embedded',
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: ['string.other.link.title', 'string.other.link.description'],
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'string.other.link.description.title',
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: [
				'string.regexp punctuation.definition.string.begin',
				'string.regexp punctuation.definition.string.end',
			],
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: ['string.other.ref', 'string.other.restructuredtext.ref'],
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: 'string.other.git-status.help.key',
			settings: {
				foreground: color.gray2,
			},
		},
		{
			scope: 'string.other.git-status.remote',
			settings: {
				foreground: color.red,
			},
		},
		{
			scope: 'support.constant',
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'support.constant.handlebars',
			settings: {
				foreground: color.gray3,
			},
		},
		{
			scope: 'support.type.vendor-prefix.css',
			settings: {
				foreground: color.gray2,
			},
		},
		{
			scope: 'support.function',
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: ['support.type', 'entity.name.type.object.console'],
			settings: {
				fontStyle: 'italic',
				foreground: color.blue,
			},
		},
		{
			scope: 'support.variable',
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'support.type.property-name',
			settings: {
				fontStyle: '',
				foreground: color.gray1,
			},
		},
		{
			scope: 'support.class',
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'text',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'text.find-in-files',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: ['variable', 'variable.other'],
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: ['variable.parameter', 'parameters variable.function'],
			settings: {
				fontStyle: 'italic',
				foreground: color.orange,
			},
		},
		{
			scope: [
				'variable.language',
				'variable.parameter.function.language.special.self.python',
				'variable.parameter.function.language.special.cls.python',
			],
			settings: {
				fontStyle: 'italic',
				foreground: color.gray2,
			},
		},
		{
			scope: 'variable.language.arguments',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'variable.other.class',
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: 'variable.other.constant',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'variable.other.member',
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'variable.other.enummember',
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: ['variable.other.property', 'variable.other.property.static', 'variable.other.event'],
			settings: {
				foreground: color.gray1,
			},
		},
		{
			scope: 'variable.function',
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: 'variable.other.substitution',
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: [
				'source.ruby variable.other.readwrite.instance.ruby',
				'source.ruby variable.other.readwrite.class.ruby',
			],
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: 'source.jinja2 variable.other.jinja2.block',
			settings: {
				foreground: color.green,
			},
		},
		{
			scope: 'source.jinja2 variable.other.jinja2',
			settings: {
				foreground: color.orange,
			},
		},
		{
			scope: ['keyword.other.DML.sql', 'keyword.other.DDL.create.II.sql'],
			settings: {
				foreground: color.blue,
			},
		},
		{
			scope: ['constant.numeric.sql'],
			settings: {
				foreground: color.violet,
			},
		},
		{
			scope: ['keyword.other.sql'],
			settings: {
				foreground: color.green,
			},
		},
	],
}
