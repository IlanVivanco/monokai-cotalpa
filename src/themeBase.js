import chroma from './utils/color.js'
import theme from './colors.js'

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
		'activityBar.background': theme.darkBackground,
		'activityBar.dropBorder': theme.focusedForeground,
		'activityBar.foreground': theme.focusedForeground,
		'activityBar.inactiveForeground': theme.gray5,
		'activityBar.border': theme.darkBackground,
		'activityBarBadge.background': theme.strings,
		'activityBarBadge.foreground': theme.background,
		'activityBar.activeBorder': theme.strings,
		'activityBar.activeBackground': chroma(theme.strings).alpha(0.1).hex(),
		'activityBar.activeFocusBorder': theme.strings,

		// Sidebar
		// https://code.visualstudio.com/api/references/theme-color#side-bar
		'sideBar.background': theme.dimmedBackground,
		'sideBar.border': theme.darkBackground,
		'sideBar.dropBackground': chroma(theme.dimmedBackground).alpha(0.75).hex(),
		'sideBar.foreground': theme.mutedForeground,
		'sideBarTitle.foreground': theme.gray5,
		'sideBarSectionHeader.background': chroma(theme.background).alpha(0.5).hex(),
		'sideBarSectionHeader.foreground': chroma(theme.mutedForeground).alpha(0.75).hex(),
		'sideBarSectionHeader.border': chroma(theme.dimmedBackground).alpha(1).hex(),

		// Minimap
		// https://code.visualstudio.com/api/references/theme-color#minimap
		'minimap.findMatchHighlight': chroma(theme.focusedForeground).alpha(0.15).hex(),
		'minimap.selectionHighlight': chroma(theme.keyword).alpha(0.3).hex(),
		'minimap.errorHighlight': chroma(theme.operator).alpha(0.8).hex(),
		'minimap.warningHighlight': chroma(theme.strings).alpha(0.5).hex(),
		'minimap.background': theme.background,
		'minimapSlider.background': chroma(theme.foreground).alpha(0.05).hex(),
		'minimapSlider.hoverBackground': chroma(theme.foreground).alpha(0.1).hex(),
		'minimapSlider.activeBackground': chroma(theme.foreground).alpha(0.1).hex(),
		'minimapGutter.addedBackground': theme.function,
		'minimapGutter.modifiedBackground': theme.attribute,
		'minimapGutter.deletedBackground': theme.operator,

		'badge.background': theme.strings,
		'badge.foreground': theme.background,

		'breadcrumb.activeSelectionForeground': theme.foreground,
		'breadcrumb.focusedForeground': theme.focusedForeground,
		'breadcrumb.foreground': theme.mutedForeground,

		'button.background': theme.lightBackground,
		'button.foreground': theme.mutedForeground,
		'button.hoverBackground': theme.background,

		'debugExceptionWidget.background': theme.lightBackground,
		'debugExceptionWidget.border': theme.background,
		'debugToolBar.background': theme.lightBackground,
		'descriptionForeground': theme.mutedForeground,

		'diffEditor.insertedTextBackground': chroma(theme.function).alpha(0.1).hex(),
		'diffEditor.insertedTextBorder': chroma(theme.darkBackground).alpha(0).hex(),
		'diffEditor.removedTextBackground': chroma(theme.operator).alpha(0.1).hex(),
		'diffEditor.removedTextBorder': chroma(theme.darkBackground).alpha(0).hex(),

		'dropdown.background': theme.background,
		'dropdown.border': theme.background,
		'dropdown.foreground': theme.mutedForeground,
		'dropdown.listBackground': theme.lightBackground,

		// Editor Colors
		// https://code.visualstudio.com/api/references/theme-color#editor-colors
		'ditor.background': null,
		'editor.foreground': null,
		'editorLineNumber.foreground': null,
		'editorLineNumber.activeForeground': null,
		'editorCursor.background': null,
		'editorCursor.foreground': null,

		'editor.selectionBackground': null,
		'editor.selectionForeground': null,
		'editor.inactiveSelectionBackground': null,
		'editor.selectionHighlightBackground': null,
		'editor.selectionHighlightBorder': null,

		'editor.wordHighlightBackground': null,
		'editor.wordHighlightBorder': null,
		'editor.wordHighlightStrongBackground': null,
		'editor.wordHighlightStrongBorder': null,

		'editor.findMatchBackground': null,
		'editor.findMatchHighlightBackground': null,
		'editor.findRangeHighlightBackground': null,
		'editor.findMatchBorder': null,
		'editor.findMatchHighlightBorder': null,
		'editor.findRangeHighlightBorder': null,

		'searchEditor.findMatchBackground': null,
		'searchEditor.findMatchBorder': null,
		'searchEditor.textInputBorder': null,

		'editor.hoverHighlightBackground': null,
		'editor.lineHighlightBackground': null,
		'editor.lineHighlightBorder': null,
		'editorLink.activeForeground': null,
		'editor.rangeHighlightBackground': null,
		'editor.rangeHighlightBorder': null,
		'editor.symbolHighlightBackground': null,
		'editor.symbolHighlightBorder': null,
		'editorWhitespace.foreground': null,
		'editorIndentGuide.background': null,
		'editorIndentGuide.activeBackground': null,
		'editorInlayHint.background': null,
		'editorInlayHint.foreground': null,
		'editorRuler.foreground': null,
		'editor.linkedEditingBackground': null,

		'editorCodeLens.foreground': null,
		'editorLightBulb.foreground': null,
		'editorLightBulbAutoFix.foreground': null,
		'editorBracketMatch.background': null,
		'editorBracketMatch.border': null,
		'editor.foldBackground': null,
		'editorOverviewRuler.background': null,
		'editorOverviewRuler.border': null,
		'editorOverviewRuler.findMatchForeground': null,
		'editorOverviewRuler.rangeHighlightForeground': null,
		'editorOverviewRuler.selectionHighlightForeground': null,
		'editorOverviewRuler.wordHighlightForeground': null,
		'editorOverviewRuler.wordHighlightStrongForeground': null,
		'editorOverviewRuler.modifiedForeground': null,
		'editorOverviewRuler.addedForeground': null,
		'editorOverviewRuler.deletedForeground': null,
		'editorOverviewRuler.errorForeground': null,
		'editorOverviewRuler.warningForeground': null,
		'editorOverviewRuler.infoForeground': null,
		'editorOverviewRuler.bracketMatchForeground': null,

		'editorError.foreground': null,
		'editorError.border': null,
		'editorError.background': null,
		'editorWarning.foreground': null,
		'editorWarning.border': null,
		'editorWarning.background': null,
		'editorInfo.foreground': null,
		'editorInfo.border': null,
		'editorInfo.background': null,
		'editorHint.foreground': null,
		'editorHint.border': null,
		'problemsErrorIcon.foreground': null,
		'problemsWarningIcon.foreground': null,
		'problemsInfoIcon.foreground': null,

		'editorUnnecessaryCode.border': null,
		'editorUnnecessaryCode.opacity': null,

		'editorGutter.background': null,
		'editorGutter.modifiedBackground': null,
		'editorGutter.addedBackground': null,
		'editorGutter.deletedBackground': null,
		'editorGutter.commentRangeForeground': null,
		'editorGutter.foldingControlForeground': null,

		'editor.background': theme.background,
		'editor.findMatchBackground': chroma(theme.foreground).alpha(0.15).hex(),
		'editor.findMatchBorder': theme.strings,
		'editor.findMatchHighlightBackground': chroma(theme.foreground).alpha(0.15).hex(),
		'editor.findMatchHighlightBorder': chroma(theme.darkBackground).alpha(0).hex(),
		'editor.findRangeHighlightBackground': chroma(theme.foreground).alpha(0.05).hex(),
		'editor.findRangeHighlightBorder': chroma(theme.darkBackground).alpha(0).hex(),
		'editor.foreground': theme.foreground,
		'editor.hoverHighlightBackground': chroma(theme.foreground).alpha(0.05).hex(),
		'editor.inactiveSelectionBackground': chroma(theme.foreground).alpha(0.05).hex(),
		'editor.lineHighlightBackground': chroma(theme.foreground).alpha(0.05).hex(),
		'editor.lineHighlightBorder': chroma(theme.darkBackground).alpha(0).hex(),
		'editor.rangeHighlightBackground': theme.lightBackground,
		'editor.rangeHighlightBorder': theme.lightBackground,
		'editor.selectionBackground': chroma(theme.focusedForeground).alpha(0.15).hex(),
		'editor.selectionHighlightBackground': chroma(theme.foreground).alpha(0.15).hex(),
		'editor.selectionHighlightBorder': chroma(theme.darkBackground).alpha(0).hex(),
		'editor.wordHighlightBackground': chroma(theme.foreground).alpha(0.15).hex(),
		'editor.wordHighlightBorder': chroma(theme.darkBackground).alpha(0).hex(),
		'editor.wordHighlightStrongBackground': chroma(theme.foreground).alpha(0.15).hex(),
		'editor.wordHighlightStrongBorder': chroma(theme.darkBackground).alpha(0).hex(),
		'editorBracketMatch.background': theme.background,
		'editorBracketMatch.border': theme.darkForeground,
		'editorCodeLens.foreground': theme.darkForeground,
		'editorCursor.background': theme.background,
		'editorCursor.foreground': theme.foreground,
		'editorError.border': chroma(theme.darkBackground).alpha(0).hex(),
		'editorError.foreground': theme.operator,

		// Editor Groups & Tabs
		// https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
		'editorGroup.border': theme.dimmedBackground,
		'editorGroup.dropBackground': chroma(theme.dimmedBackground).alpha(0.75).hex(),
		'editorGroupHeader.noTabsBackground': theme.background,
		'editorGroupHeader.tabsBackground': theme.background,
		'editorGroupHeader.tabsBorder': theme.background,
		'editorGroup.emptyBackground': theme.darkBackground,
		'editorGroupHeader.border': chroma(theme.dimmedBackground).alpha(0.4).hex(),
		'editorGroup.focusedEmptyBorder': theme.dimmedBackground,
		'tab.activeBackground': theme.background,
		'tab.unfocusedActiveBackground': theme.background,
		'tab.activeForeground': theme.strings,
		'tab.border': theme.background,
		'tab.activeBorder': theme.strings,
		'tab.unfocusedActiveBorder': theme.mutedForeground,
		'tab.activeBorderTop': theme.background,
		'tab.unfocusedActiveBorderTop': theme.background,
		'tab.lastPinnedBorder': theme.lightBackground,
		'tab.inactiveBackground': chroma(theme.dimmedBackground).alpha(0.6).hex(),
		'tab.unfocusedInactiveBackground': chroma(theme.dimmedBackground).alpha(0.6).hex(),
		'tab.inactiveForeground': theme.gray5,
		'tab.unfocusedActiveForeground': theme.darkForeground,
		'tab.unfocusedInactiveForeground': theme.gray5,
		'tab.hoverBackground': chroma(theme.lightBackground).alpha(0.4).hex(),
		'tab.unfocusedHoverBackground': chroma(theme.lightBackground).alpha(0.4).hex(),
		'tab.hoverForeground': theme.mutedForeground,
		'tab.unfocusedHoverForeground': theme.mutedForeground,
		'tab.hoverBorder': theme.gray5,
		'tab.unfocusedHoverBorder': theme.background,
		'tab.activeModifiedBorder': theme.gray5,
		'tab.inactiveModifiedBorder': theme.gray5,
		'tab.unfocusedActiveModifiedBorder': theme.lightBackground,
		'tab.unfocusedInactiveModifiedBorder': theme.lightBackground,
		'editorPane.background': theme.background,

		'editorGutter.addedBackground': theme.function,
		'editorGutter.background': theme.background,
		'editorGutter.deletedBackground': theme.operator,
		'editorGutter.modifiedBackground': theme.attribute,

		'editorHint.border': theme.background,
		'editorHint.foreground': theme.variable,

		'editorHoverWidget.background': theme.lightBackground,
		'editorHoverWidget.border': theme.background,

		'editorIndentGuide.background': theme.lightBackground,

		'editorInfo.border': theme.background,
		'editorInfo.foreground': theme.keyword,

		'editorLineNumber.activeForeground': theme.focusedForeground,
		'editorLineNumber.foreground': theme.gray5,
		'editorLink.activeForeground': theme.keyword,

		'editorMarkerNavigation.background': theme.lightBackground,
		'editorMarkerNavigationError.background': theme.operator,
		'editorMarkerNavigationInfo.background': theme.keyword,
		'editorMarkerNavigationWarning.background': theme.attribute,

		'editorOverviewRuler.addedForeground': theme.function,
		'editorOverviewRuler.border': theme.background,
		'editorOverviewRuler.currentContentForeground': theme.lightBackground,
		'editorOverviewRuler.deletedForeground': theme.operator,
		'editorOverviewRuler.errorForeground': theme.operator,
		'editorOverviewRuler.findMatchForeground': chroma(theme.foreground).alpha(0.15).hex(),
		'editorOverviewRuler.incomingContentForeground': theme.lightBackground,
		'editorOverviewRuler.infoForeground': theme.keyword,
		'editorOverviewRuler.modifiedForeground': theme.attribute,
		'editorOverviewRuler.rangeHighlightForeground': chroma(theme.foreground).alpha(0.15).hex(),
		'editorOverviewRuler.selectionHighlightForeground': chroma(theme.foreground).alpha(0.15).hex(),
		'editorOverviewRuler.warningForeground': theme.attribute,
		'editorOverviewRuler.wordHighlightForeground': chroma(theme.foreground).alpha(0.15).hex(),
		'editorOverviewRuler.wordHighlightStrongForeground': chroma(theme.foreground).alpha(0.15).hex(),

		'editorRuler.foreground': theme.gray5,

		'editorSuggestWidget.background': theme.lightBackground,
		'editorSuggestWidget.border': theme.lightBackground,
		'editorSuggestWidget.foreground': theme.focusedForeground,
		'editorSuggestWidget.highlightForeground': theme.foreground,
		'editorSuggestWidget.selectedBackground': theme.darkForeground,

		'editorWarning.border': chroma(theme.darkBackground).alpha(0).hex(),
		'editorWarning.foreground': theme.attribute,

		'editorWhitespace.foreground': theme.gray5,

		'editorWidget.background': theme.lightBackground,
		'editorWidget.border': theme.lightBackground,

		'errorForeground': theme.operator,

		'extensionButton.prominentBackground': theme.lightBackground,
		'extensionButton.prominentForeground': theme.foreground,
		'extensionButton.prominentHoverBackground': theme.gray5,

		'focusBorder': theme.darkForeground,
		'foreground': theme.foreground,

		'gitDecoration.conflictingResourceForeground': theme.attribute,
		'gitDecoration.deletedResourceForeground': theme.operator,
		'gitDecoration.ignoredResourceForeground': theme.gray5,
		'gitDecoration.modifiedResourceForeground': theme.function,
		'gitDecoration.untrackedResourceForeground': theme.attribute,

		'input.background': theme.lightBackground,
		'input.border': theme.lightBackground,
		'input.foreground': theme.foreground,
		'input.placeholderForeground': theme.darkForeground,
		'inputOption.activeBackground': theme.gray5,
		'inputOption.activeBorder': theme.gray5,
		'inputValidation.errorBackground': theme.lightBackground,
		'inputValidation.errorBorder': theme.operator,
		'inputValidation.errorForeground': theme.operator,
		'inputValidation.infoBackground': theme.lightBackground,
		'inputValidation.infoBorder': theme.keyword,
		'inputValidation.infoForeground': theme.keyword,
		'inputValidation.warningBackground': theme.lightBackground,
		'inputValidation.warningBorder': theme.attribute,
		'inputValidation.warningForeground': theme.attribute,

		'list.activeSelectionBackground': theme.background,
		'list.activeSelectionForeground': theme.strings,
		'list.dropBackground': chroma(theme.dimmedBackground).alpha(0.75).hex(),
		'list.errorForeground': theme.operator,
		'list.focusBackground': theme.background,
		'list.focusedForeground': theme.foreground,
		'list.highlightForeground': theme.foreground,
		'list.hoverBackground': theme.dimmedBackground,
		'list.hoverForeground': theme.foreground,
		'list.inactiveFocusBackground': theme.background,
		'list.inactiveSelectionBackground': theme.background,
		'list.inactiveSelectionForeground': theme.strings,
		'list.invalidItemForeground': theme.operator,
		'list.warningForeground': theme.attribute,

		'listFilterWidget.background': theme.background,
		'listFilterWidget.noMatchesOutline': theme.operator,
		'listFilterWidget.outline': theme.background,

		'merge.border': theme.background,
		'merge.commonContentBackground': chroma(theme.foreground).alpha(0.1).hex(),
		'merge.commonHeaderBackground': chroma(theme.foreground).alpha(0.15).hex(),
		'merge.currentContentBackground': chroma(theme.operator).alpha(0.1).hex(),
		'merge.currentHeaderBackground': chroma(theme.operator).alpha(0.15).hex(),
		'merge.incomingContentBackground': chroma(theme.function).alpha(0.1).hex(),
		'merge.incomingHeaderBackground': chroma(theme.function).alpha(0.15).hex(),

		'notificationCenter.border': theme.lightBackground,
		'notificationCenterHeader.background': theme.lightBackground,
		'notificationCenterHeader.foreground': theme.mutedForeground,

		'notificationLink.foreground': theme.strings,

		'notificationToast.border': theme.lightBackground,

		'notifications.background': theme.lightBackground,
		'notifications.border': theme.lightBackground,
		'notifications.foreground': theme.focusedForeground,

		'panel.background': theme.lightBackground,
		'panel.border': theme.background,

		'panelTitle.activeBorder': theme.strings,
		'panelTitle.activeForeground': theme.strings,
		'panelTitle.inactiveForeground': theme.mutedForeground,

		'peekView.border': theme.background,

		'peekViewEditor.background': theme.lightBackground,
		'peekViewEditor.matchHighlightBackground': theme.gray5,

		'peekViewEditorGutter.background': theme.lightBackground,

		'peekViewResult.background': theme.lightBackground,
		'peekViewResult.fileForeground': theme.mutedForeground,
		'peekViewResult.lineForeground': theme.mutedForeground,
		'peekViewResult.matchHighlightBackground': theme.gray5,
		'peekViewResult.selectionBackground': theme.lightBackground,
		'peekViewResult.selectionForeground': theme.foreground,

		'peekViewTitle.background': theme.lightBackground,
		'peekViewTitleDescription.foreground': theme.mutedForeground,

		'peekViewTitleLabel.foreground': theme.foreground,

		'pickerGroup.border': theme.background,
		'pickerGroup.foreground': theme.gray5,

		'progressBar.background': theme.lightBackground,

		'sash.hoverBorder': theme.strings,

		'scrollbar.shadow': theme.background,

		'scrollbarSlider.activeBackground': chroma(theme.foreground).alpha(0.05).hex(),
		'scrollbarSlider.background': chroma(theme.foreground).alpha(0.05).hex(),
		'scrollbarSlider.hoverBackground': chroma(theme.foreground).alpha(0.05).hex(),

		'selection.background': chroma(theme.foreground).alpha(0.15).hex(),

		'settings.checkboxBackground': theme.lightBackground,
		'settings.checkboxBorder': theme.lightBackground,
		'settings.checkboxForeground': theme.foreground,
		'settings.dropdownBackground': theme.lightBackground,
		'settings.dropdownBorder': theme.lightBackground,
		'settings.dropdownForeground': theme.foreground,
		'settings.dropdownListBorder': theme.mutedForeground,
		'settings.headerForeground': theme.strings,
		'settings.modifiedItemIndicator': theme.strings,
		'settings.numberInputBackground': theme.lightBackground,
		'settings.numberInputBorder': theme.lightBackground,
		'settings.numberInputForeground': theme.foreground,
		'settings.textInputBackground': theme.lightBackground,
		'settings.textInputBorder': theme.lightBackground,
		'settings.textInputForeground': theme.foreground,

		'statusBar.background': theme.darkBackground,
		'statusBar.border': theme.dimmedBackground,
		'statusBar.debuggingBackground': theme.attribute,
		'statusBar.debuggingBorder': theme.dimmedBackground,
		'statusBar.debuggingForeground': theme.darkForeground,
		'statusBar.foreground': theme.mutedForeground,
		'statusBar.noFolderBackground': theme.dimmedBackground,
		'statusBar.noFolderBorder': theme.darkBackground,
		'statusBar.noFolderForeground': theme.darkForeground,

		'statusBarItem.activeBackground': theme.background,
		'statusBarItem.hoverBackground': chroma(theme.background).alpha(0.15).hex(),
		'statusBarItem.prominentBackground': theme.lightBackground,
		'statusBarItem.prominentHoverBackground': theme.lightBackground,

		'terminal.ansiBlack': theme.lightBackground,
		'terminal.ansiBlue': theme.attribute,
		'terminal.ansiBrightBlack': theme.darkForeground,
		'terminal.ansiBrightBlue': theme.attribute,
		'terminal.ansiBrightCyan': theme.keyword,
		'terminal.ansiBrightGreen': theme.function,
		'terminal.ansiBrightMagenta': theme.variable,
		'terminal.ansiBrightRed': theme.operator,
		'terminal.ansiBrightWhite': theme.foreground,
		'terminal.ansiBrightYellow': theme.strings,
		'terminal.ansiCyan': theme.keyword,
		'terminal.ansiGreen': theme.function,
		'terminal.ansiMagenta': theme.variable,
		'terminal.ansiRed': theme.operator,
		'terminal.ansiWhite': theme.foreground,
		'terminal.ansiYellow': theme.strings,
		'terminal.background': theme.lightBackground,
		'terminal.foreground': theme.foreground,
		'terminal.selectionBackground': chroma(theme.foreground).alpha(0.15).hex(),

		'terminalCursor.background': chroma(theme.darkBackground).alpha(0).hex(),
		'terminalCursor.foreground': theme.foreground,

		'textBlockQuote.background': theme.lightBackground,
		'textBlockQuote.border': theme.lightBackground,

		'textCodeBlock.background': theme.lightBackground,

		'textLink.activeForeground': theme.foreground,
		'textLink.foreground': theme.strings,

		'textPreformat.foreground': theme.foreground,

		'textSeparator.foreground': theme.darkForeground,

		'titleBar.activeBackground': theme.dimmedBackground,
		'titleBar.activeForeground': theme.mutedForeground,
		'titleBar.border': theme.darkBackground,
		'titleBar.inactiveBackground': theme.dimmedBackground,
		'titleBar.inactiveForeground': theme.gray5,

		'walkThrough.embeddedEditorBackground': theme.dimmedBackground,

		'welcomePage.buttonBackground': theme.lightBackground,
		'welcomePage.buttonHoverBackground': theme.gray5,

		'widget.shadow': theme.darkBackground,
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
				foreground: theme.darkForeground,
			},
		},
		{
			scope: ['source.php comment.block.documentation.phpdoc.php meta.other.type.phpdoc.php'],
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'comment storage.type',
			settings: {
				foreground: theme.darkForeground,
			},
		},
		{
			scope: 'comment entity.name.type',
			settings: {
				foreground: theme.focusedForeground,
			},
		},
		{
			scope: ['comment variable', 'comment variable.other'],
			settings: {
				foreground: theme.focusedForeground,
			},
		},
		{
			scope: 'comment keyword.codetag.notation',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'comment.git-status.header.remote',
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'comment.git-status.header.local',
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'comment.other.git-status.head',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'constant',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.other',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'constant.other.php',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.other.property',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.other.citation.latex',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.other.color',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.other.character-class.escape',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.other.key',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.other.symbol',
			settings: {
				foreground: theme.attribute,
			},
		},
		{
			scope: 'constant.numeric',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.language',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.character.escape',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'constant.numeric.line-number.find-in-files',
			settings: {
				foreground: theme.gray5,
			},
		},
		{
			scope: 'constant.numeric.line-number.match.find-in-files',
			settings: {
				foreground: theme.strings,
			},
		},
		{
			scope: 'entity.name.section',
			settings: {
				foreground: theme.strings,
			},
		},
		{
			scope: ['entity.name.function', 'entity.name.function.templated'],
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: 'entity.name.function.member.static',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: ['entity.name.type.class.templated', 'entity.name.type.class.generic', 'entity.name.type.namespace'],
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'entity.name.label',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'entity.name.function.preprocessor',
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'entity.name',
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: 'entity.name.class',
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'entity.name.constant',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'entity.name.namespace',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'entity.other.inherited-class',
			settings: {
				fontStyle: 'italic',
				foreground: theme.keyword,
			},
		},
		{
			scope: 'entity.name.function',
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: [
				'entity.name.tag',
				'entity.name.tag.js.jsx support.class.component.js.jsx',
				'entity.name.tag support.class.component',
			],
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'entity.name.function.operator',
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: ['entity.name.type', 'entity.name.type.class.reference', 'entity.name.type.class.value'],
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'entity.other.attribute-name',
			settings: {
				fontStyle: 'italic',
				foreground: theme.keyword,
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
				foreground: theme.function,
			},
		},
		{
			scope: 'entity.other.attribute-name.id.css',
			settings: {
				foreground: theme.attribute,
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
				foreground: theme.keyword,
			},
		},
		{
			scope: ['entity.name.function', 'support.function'],
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: 'entity.other.git-status.hex',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'entity.other.jinja2.delimiter',
			settings: {
				foreground: theme.mutedForeground,
			},
		},
		{
			scope: 'entity.name.operator.custom-literal',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'entity.name.operator.custom-literal.string',
			settings: {
				foreground: theme.strings,
			},
		},
		{
			scope: 'entity.name.operator.custom-literal.number',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'invalid',
			settings: {},
		},
		{
			scope: 'keyword.control',
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'keyword.control.directive',
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: ['keyword.operator', 'keyword.operator.member', 'keyword.operator.new'],
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'keyword.other.substitution',
			settings: {
				foreground: theme.mutedForeground,
			},
		},
		{
			scope: ['keyword.other.template.begin', 'keyword.other.template.end'],
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: [
				'keyword.operator.heading.restructuredtext',
				'keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext',
			],
			settings: {
				foreground: theme.mutedForeground,
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
				foreground: theme.strings,
			},
		},
		{
			scope: 'markup.raw',
			settings: {
				foreground: theme.attribute,
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
				foreground: theme.function,
			},
		},
		{
			scope: ['markup.inserted', 'markup.inserted punctuation.definition.inserted'],
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: ['markup.deleted', 'markup.deleted punctuation.definition.deleted'],
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: ['markup.changed', 'markup.changed punctuation.definition.changed'],
			settings: {
				foreground: theme.strings,
			},
		},
		{
			scope: ['markup.ignored', 'markup.ignored punctuation.definition.ignored'],
			settings: {
				foreground: theme.mutedForeground,
			},
		},
		{
			scope: 'markup.untracked',
			settings: {
				foreground: theme.mutedForeground,
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
				foreground: theme.mutedForeground,
			},
		},
		{
			scope: ['meta.function-call.python', 'meta.function-call.arguments.python meta.function-call.python'],
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: 'meta.function-call.python meta.function-call.arguments.python',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'meta.instance.constructor',
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: ['meta.attribute-with-value.class string', 'meta.attribute.class.html string'],
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: ['meta.attribute-with-value.id string', 'meta.attribute.id.html string'],
			settings: {
				foreground: theme.attribute,
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
				foreground: theme.foreground,
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
				foreground: theme.strings,
			},
		},
		{
			scope: ['meta.object.member', 'variable.other meta.objectliteral meta.object.member'],
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'meta.object-literal.key',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'meta.property-list.css variable.other',
			settings: {
				foreground: theme.attribute,
			},
		},
		{
			scope: ['entity.name.constant.preprocessor', 'meta.preprocessor'],
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'meta.diff.git-diff.header',
			settings: {
				foreground: theme.strings,
			},
		},
		{
			scope: 'punctuation',
			settings: {
				foreground: theme.mutedForeground,
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
				foreground: theme.mutedForeground,
			},
		},
		{
			scope: 'punctuation.definition.group',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'punctuation.definition.comment',
			settings: {
				foreground: theme.darkForeground,
			},
		},
		{
			scope: [
				'punctuation.definition.variable',
				'punctuation.definition.keyword.scss',
				'punctuation.definition.entity.css',
			],
			settings: {
				foreground: theme.focusedForeground,
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
				foreground: theme.attribute,
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
				foreground: theme.operator,
			},
		},
		{
			scope: ['markup.inline.raw'],
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'region.redish',
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'region.orangish',
			settings: {
				foreground: theme.attribute,
			},
		},
		{
			scope: 'region.yellowish',
			settings: {
				foreground: theme.strings,
			},
		},
		{
			scope: 'region.greenish',
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: 'region.bluish',
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'region.purplish',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'region.pinkish',
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'region.whitish',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'source',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: ['source.scss', 'source.sass'],
			settings: {
				foreground: theme.mutedForeground,
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
				foreground: theme.attribute,
			},
		},
		{
			scope: 'source.git-show.commit.sha',
			settings: {
				foreground: theme.variable,
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
				foreground: theme.mutedForeground,
			},
		},
		{
			scope: [
				'source.git-show meta.diff.git-diff.header.extended.index.from-sha',
				'source.git-show meta.diff.git-diff.header.extended.index.to-sha',
			],
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'source.git-show meta.diff.range.unified',
			settings: {
				foreground: theme.attribute,
			},
		},
		{
			scope: ['source.git-show meta.diff.header.from-file', 'source.git-show meta.diff.header.to-file'],
			settings: {
				foreground: theme.mutedForeground,
			},
		},
		{
			scope: 'storage',
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'storage.type',
			settings: {
				fontStyle: 'italic',
				foreground: theme.keyword,
			},
		},
		{
			scope: 'storage.type.extends',
			settings: {
				fontStyle: '',
				foreground: theme.operator,
			},
		},
		{
			scope: 'storage.type.function.arrow',
			settings: {
				fontStyle: '',
				foreground: theme.operator,
			},
		},
		{
			scope: ['storage.modifier', 'storage.type.modifier'],
			settings: {
				fontStyle: 'italic',
				foreground: theme.operator,
			},
		},
		{
			scope: 'storage.class.restructuredtext.ref',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'string',
			settings: {
				foreground: theme.strings,
			},
		},
		{
			scope: 'string.unquoted.label',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'string source',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'string source punctuation.section.embedded',
			settings: {
				foreground: theme.mutedForeground,
			},
		},
		{
			scope: ['string.other.link.title', 'string.other.link.description'],
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'string.other.link.description.title',
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: [
				'string.regexp punctuation.definition.string.begin',
				'string.regexp punctuation.definition.string.end',
			],
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: ['string.other.ref', 'string.other.restructuredtext.ref'],
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: 'string.other.git-status.help.key',
			settings: {
				foreground: theme.focusedForeground,
			},
		},
		{
			scope: 'string.other.git-status.remote',
			settings: {
				foreground: theme.operator,
			},
		},
		{
			scope: 'support.constant',
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'support.constant.handlebars',
			settings: {
				foreground: theme.mutedForeground,
			},
		},
		{
			scope: 'support.type.vendor-prefix.css',
			settings: {
				foreground: theme.focusedForeground,
			},
		},
		{
			scope: 'support.function',
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: ['support.type', 'entity.name.type.object.console'],
			settings: {
				fontStyle: 'italic',
				foreground: theme.keyword,
			},
		},
		{
			scope: 'support.variable',
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'support.type.property-name',
			settings: {
				fontStyle: '',
				foreground: theme.foreground,
			},
		},
		{
			scope: 'support.class',
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'text',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'text.find-in-files',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: ['variable', 'variable.other'],
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: ['variable.parameter', 'parameters variable.function'],
			settings: {
				fontStyle: 'italic',
				foreground: theme.attribute,
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
				foreground: theme.focusedForeground,
			},
		},
		{
			scope: 'variable.language.arguments',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'variable.other.class',
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: 'variable.other.constant',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'variable.other.member',
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'variable.other.enummember',
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: ['variable.other.property', 'variable.other.property.static', 'variable.other.event'],
			settings: {
				foreground: theme.foreground,
			},
		},
		{
			scope: 'variable.function',
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: 'variable.other.substitution',
			settings: {
				foreground: theme.attribute,
			},
		},
		{
			scope: [
				'source.ruby variable.other.readwrite.instance.ruby',
				'source.ruby variable.other.readwrite.class.ruby',
			],
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: 'source.jinja2 variable.other.jinja2.block',
			settings: {
				foreground: theme.function,
			},
		},
		{
			scope: 'source.jinja2 variable.other.jinja2',
			settings: {
				foreground: theme.attribute,
			},
		},
		{
			scope: ['keyword.other.DML.sql', 'keyword.other.DDL.create.II.sql'],
			settings: {
				foreground: theme.keyword,
			},
		},
		{
			scope: ['constant.numeric.sql'],
			settings: {
				foreground: theme.variable,
			},
		},
		{
			scope: ['keyword.other.sql'],
			settings: {
				foreground: theme.function,
			},
		},
	],
}
