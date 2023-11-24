export default {
	// General docs
	// https://code.visualstudio.com/api/references/theme-color

	// Activity bar
	// https://code.visualstudio.com/api/references/theme-color#activity-bar
	'activityBar.background': ['gray-900'],
	'activityBar.dropBorder': ['yellow', 0.5],
	'activityBar.foreground': ['gray-200'],
	'activityBar.inactiveForeground': ['gray-500'],
	'activityBar.border': ['gray-900'],
	'activityBarBadge.background': ['yellow'],
	'activityBarBadge.foreground': ['gray-800'],
	'activityBar.activeBorder': ['yellow'],
	'activityBar.activeBackground': ['yellow', 0.1],
	'activityBar.activeFocusBorder': ['yellow'],

	// Sidebar
	// https://code.visualstudio.com/api/references/theme-color#side-bar
	'sideBar.background': ['gray-800'],
	'sideBar.border': ['gray-900'],
	'sideBar.dropBackground': ['gray-800', 0.6],
	'sideBar.foreground': ['gray-300'],
	'sideBarTitle.foreground': ['gray-500'],
	'sideBarSectionHeader.background': ['gray-700', 0.4],
	'sideBarSectionHeader.foreground': ['gray-400', 0.7],
	'sideBarSectionHeader.border': ['gray-800'],

	// Minimap
	// https://code.visualstudio.com/api/references/theme-color#minimap
	'minimap.findMatchHighlight': ['gray-200', 0.2],
	'minimap.selectionHighlight': ['yellow', 0.2],
	'minimap.selectionOccurrenceHighlight': ['yellow', 0.4],
	'minimap.errorHighlight': ['error', 0.2],
	'minimap.warningHighlight': ['warning', 0.2],
	'minimap.background': ['gray-700', 1],
	'minimapSlider.background': ['blue', 0.05],
	'minimapSlider.hoverBackground': ['blue', 0.1],
	'minimapSlider.activeBackground': ['blue', 0.1],
	'minimapGutter.addedBackground': ['success', 0.5],
	'minimapGutter.modifiedBackground': ['warning', 0.5],
	'minimapGutter.deletedBackground': ['error', 0.5],

	'badge.background': ['yellow'],
	'badge.foreground': ['gray-700'],

	'breadcrumb.activeSelectionForeground': ['gray-300'],
	'breadcrumb.foreground': ['gray-400'],
	'breadcrumb.background': ['gray-700', 0.8],

	'button.background': ['gray-600'],
	'button.foreground': ['gray-300'],
	'button.hoverBackground': ['gray-700'],

	'debugExceptionWidget.background': ['gray-600'],
	'debugExceptionWidget.border': ['gray-700'],
	'debugToolBar.background': ['gray-600'],
	'descriptionForeground': ['gray-300'],

	'diffEditor.insertedTextBackground': ['green', 0.1],
	'diffEditor.insertedTextBorder': ['gray-900', 0],
	'diffEditor.removedTextBackground': ['red', 0.1],
	'diffEditor.removedTextBorder': ['gray-900', 0],

	'dropdown.background': ['gray-700'],
	'dropdown.border': ['gray-700'],
	'dropdown.foreground': ['gray-300'],
	'dropdown.listBackground': ['gray-600'],

	// Editor Colors
	// https://code.visualstudio.com/api/references/theme-color#editor-colors
	'editor.background': ['gray-700'],
	'editor.foreground': ['gray-100'],
	'editorLineNumber.foreground': null,
	'editorLineNumber.activeForeground': null,
	'editorCursor.background': ['gray-700'],
	'editorCursor.foreground': ['gray-100'],

	'editor.selectionBackground': ['gray-300', 0.15],
	'editor.selectionForeground': ['yellow'],
	'editor.inactiveSelectionBackground': ['gray-100', 0.05],
	'editor.selectionHighlightBackground': ['gray-200', 0.15],
	'editor.selectionHighlightBorder': null,

	'editor.wordHighlightBackground': ['gray-400', 0.1],
	'editor.wordHighlightBorder': null,
	'editor.wordHighlightStrongBackground': ['gray-400', 0.1],
	'editor.wordHighlightStrongBorder': null,

	'editor.findMatchBackground': ['gray-200', 0.1],
	'editor.findMatchHighlightBackground': ['gray-200', 0.1],
	'editor.findRangeHighlightBackground': ['gray-200', 0.1],
	'editor.findMatchBorder': ['gray-100', 0.3],
	'editor.findMatchHighlightBorder': ['gray-200', 0.1],
	'editor.findRangeHighlightBorder': ['gray-200', 0.1],

	'editorStickyScroll.background': ['gray-700'],
	'editorStickyScrollHover.background': ['blue', 0.05],

	'searchEditor.findMatchB/* ackground': null,
	'searchEditor.findMatchBorder': null,
	'searchEditor.textInputBorder': null,

	'editorIndentGuide.background': ['gray-600', 0.5],
	'editorIndentGuide.activeBackground': ['yellow', 0.3],

	'editorBracketMatch.border': ['yellow', 0.3],
	'editorBracketMatch.background': null,

	'editorBracketPairGuide.background1': ['green', 0.3],
	'editorBracketPairGuide.background2': ['green', 0.3],
	'editorBracketPairGuide.background3': ['green', 0.3],
	'editorBracketPairGuide.background4': ['green', 0.3],
	'editorBracketPairGuide.background5': ['green', 0.3],
	'editorBracketPairGuide.background6': ['green', 0.3],

	'editorBracketPairGuide.activeBackground1': ['yellow', 0.3],
	'editorBracketPairGuide.activeBackground2': ['yellow', 0.3],
	'editorBracketPairGuide.activeBackground3': ['yellow', 0.3],
	'editorBracketPairGuide.activeBackground4': ['yellow', 0.3],
	'editorBracketPairGuide.activeBackground5': ['yellow', 0.3],
	'editorBracketPairGuide.activeBackground6': ['yellow', 0.3],

	'editorBracketHighlight.foreground1': ['yellow', 0.7],
	'editorBracketHighlight.foreground2': ['orange', 0.7],
	'editorBracketHighlight.foreground3': ['magenta', 0.7],
	'editorBracketHighlight.foreground4': ['purple', 0.7],
	'editorBracketHighlight.foreground5': ['cyan', 0.7],
	'editorBracketHighlight.foreground5': ['blue', 0.7],
	'editorBracketHighlight.unexpectedBracket.foreground': ['error'],

	'editor.hoverHighlightBackground': ['gray-400', 0.1],
	'editor.lineHighlightBackground': ['gray-400', 0.1],
	'editor.lineHighlightBorder': null,
	'editorLink.activeForeground': null,
	'editor.rangeHighlightBackground': ['gray-600'],
	'editor.rangeHighlightBorder': null,
	'editor.symbolHighlightBackground': null,
	'editor.symbolHighlightBorder': null,
	'editorWhitespace.foreground': null,
	'editorInlayHint.background': null,
	'editorInlayHint.foreground': null,
	'editorRuler.foreground': null,
	'editor.linkedEditingBackground': null,

	'editorCodeLens.foreground': ['gray-400'],
	'editorLightBulb.foreground': null,
	'editorLightBulbAutoFix.foreground': null,
	'editor.foldBackground': null,
	'editorOverviewRuler.background': ['gray-700'],
	'editorOverviewRuler.border': ['gray-800', 0.7],
	'editorOverviewRuler.findMatchForeground': ['gray-100', 0.15],
	'editorOverviewRuler.rangeHighlightForeground': ['gray-100', 0.15],
	'editorOverviewRuler.selectionHighlightForeground': ['gray-100', 0.15],
	'editorOverviewRuler.wordHighlightForeground': ['gray-100', 0.15],
	'editorOverviewRuler.wordHighlightStrongForeground': ['gray-100', 0.15],
	'editorOverviewRuler.modifiedForeground': ['orange', 0.3],
	'editorOverviewRuler.addedForeground': ['green', 0.3],
	'editorOverviewRuler.deletedForeground': ['red', 0.3],
	'editorOverviewRuler.errorForeground': ['error', 0.3],
	'editorOverviewRuler.warningForeground': ['warning', 0.3],
	'editorOverviewRuler.infoForeground': ['info', 0.3],
	'editorOverviewRuler.bracketMatchForeground': null,
	'editorOverviewRuler.incomingContentForeground': ['gray-600'],
	'editorOverviewRuler.currentContentForeground': ['gray-600'],

	'editorError.foreground': ['error', 0.5],
	'editorError.border': null,
	'editorError.background': null,
	'editorWarning.foreground': ['warning', 0.5],
	'editorWarning.border': null,
	'editorWarning.background': null,
	'editorInfo.foreground': ['info', 0.5],
	'editorInfo.border': null,
	'editorInfo.background': null,
	'editorHint.foreground': ['info', 0.5],
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

	// Editor Groups & Tabs
	// https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
	'editorGroup.border': ['gray-800', 0.5],
	'editorGroup.dropBackground': ['gray-800', 0.6],
	'editorGroupHeader.noTabsBackground': ['gray-700'],
	'editorGroupHeader.tabsBackground': ['gray-800', 0.5],
	'editorGroupHeader.tabsBorder': ['gray-800', 0.5],
	'editorGroup.emptyBackground': ['gray-900'],
	'editorGroupHeader.border': ['gray-800', 0.5],
	'editorGroup.focusedEmptyBorder': ['gray-800'],
	'tab.activeBackground': ['gray-800'],
	'tab.unfocusedActiveBackground': ['gray-700'],
	'tab.activeForeground': ['yellow', 0.8],
	'tab.border': ['gray-800', 0.5],
	'tab.activeBorder': ['yellow', 0.8],
	'tab.unfocusedActiveBorder': ['gray-300'],
	'tab.activeBorderTop': ['gray-700'],
	'tab.unfocusedActiveBorderTop': ['gray-700'],
	'tab.lastPinnedBorder': ['gray-600'],
	'tab.inactiveBackground': ['gray-800', 0.5],
	'tab.unfocusedInactiveBackground': ['gray-800', 0.5],
	'tab.inactiveForeground': ['gray-500'],
	'tab.unfocusedActiveForeground': ['gray-400'],
	'tab.unfocusedInactiveForeground': ['gray-500'],
	'tab.hoverBackground': ['gray-900', 0.5],
	'tab.unfocusedHoverBackground': ['gray-900', 0.5],
	'tab.hoverForeground': ['gray-300'],
	'tab.unfocusedHoverForeground': ['gray-300'],
	'tab.hoverBorder': ['gray-500'],
	'tab.unfocusedHoverBorder': ['gray-700'],
	'tab.activeModifiedBorder': ['gray-500'],
	'tab.inactiveModifiedBorder': ['gray-500'],
	'tab.unfocusedActiveModifiedBorder': ['gray-600'],
	'tab.unfocusedInactiveModifiedBorder': ['gray-600'],
	'editorPane.background': ['gray-700'],

	'tree.indentGuidesStroke': ['gray-500', 0.5],
	'tree.inactiveIndentGuidesStroke': ['gray-600', 0.3],

	'editorGutter.addedBackground': ['green'],
	'editorGutter.background': ['gray-700'],
	'editorGutter.deletedBackground': ['red'],
	'editorGutter.modifiedBackground': ['orange'],

	'editorHint.border': ['gray-700'],
	'editorHint.foreground': ['blue'],

	'editorHoverWidget.background': ['gray-600'],
	'editorHoverWidget.border': ['gray-700'],

	'editorInfo.border': ['gray-700'],
	'editorInfo.foreground': ['cyan'],

	'editorLineNumber.activeForeground': ['gray-300'],
	'editorLineNumber.foreground': ['gray-500'],
	'editorLink.activeForeground': ['cyan'],

	'editorMarkerNavigation.background': ['gray-600'],
	'editorMarkerNavigationError.background': ['red'],
	'editorMarkerNavigationInfo.background': ['cyan'],
	'editorMarkerNavigationWarning.background': ['orange'],

	'editorRuler.foreground': ['gray-500'],

	'editorSuggestWidget.background': ['gray-600'],
	'editorSuggestWidget.border': ['gray-600'],
	'editorSuggestWidget.foreground': ['gray-200'],
	'editorSuggestWidget.highlightForeground': ['gray-100'],
	'editorSuggestWidget.selectedBackground': ['gray-400'],

	'editorWarning.border': null,
	'editorWarning.foreground': ['orange'],

	'editorWhitespace.foreground': ['gray-500'],

	'editorWidget.background': ['gray-600'],
	'editorWidget.border': ['gray-600'],

	'errorForeground': ['red'],

	'extensionButton.prominentBackground': ['gray-600'],
	'extensionButton.prominentForeground': ['gray-100'],
	'extensionButton.prominentHoverBackground': ['gray-500'],

	'focusBorder': ['gray-400'],
	'foreground': ['gray-100'],

	'gitDecoration.conflictingResourceForeground': ['orange'],
	'gitDecoration.deletedResourceForeground': ['red'],
	'gitDecoration.ignoredResourceForeground': ['gray-500'],
	'gitDecoration.modifiedResourceForeground': ['green'],
	'gitDecoration.untrackedResourceForeground': ['orange'],

	'input.background': ['gray-600'],
	'input.border': ['gray-600'],
	'input.foreground': ['gray-100'],
	'input.placeholderForeground': ['gray-400'],
	'inputOption.activeBackground': ['gray-500'],
	'inputOption.activeBorder': ['gray-500'],
	'inputValidation.errorBackground': ['gray-600'],
	'inputValidation.errorBorder': ['red'],
	'inputValidation.errorForeground': ['red'],
	'inputValidation.infoBackground': ['gray-600'],
	'inputValidation.infoBorder': ['cyan'],
	'inputValidation.infoForeground': ['cyan'],
	'inputValidation.warningBackground': ['gray-600'],
	'inputValidation.warningBorder': ['orange'],
	'inputValidation.warningForeground': ['orange'],

	'list.activeSelectionBackground': ['gray-700'],
	'list.activeSelectionForeground': ['yellow'],
	'list.dropBackground': ['gray-800', 0.75],
	'list.errorForeground': ['red'],
	'list.focusBackground': ['gray-700'],
	'list.highlightForeground': ['gray-100'],
	'list.hoverBackground': ['gray-800'],
	'list.hoverForeground': ['gray-100'],
	'list.inactiveFocusBackground': ['gray-700'],
	'list.inactiveSelectionBackground': ['gray-700'],
	'list.inactiveSelectionForeground': ['yellow'],
	'list.invalidItemForeground': ['red'],
	'list.warningForeground': ['orange'],

	'listFilterWidget.background': ['gray-700'],
	'listFilterWidget.noMatchesOutline': ['red'],
	'listFilterWidget.outline': ['gray-700'],

	'merge.border': ['gray-700'],
	'merge.commonContentBackground': ['gray-100', 0.1],
	'merge.commonHeaderBackground': ['gray-100', 0.15],
	'merge.currentContentBackground': ['red', 0.1],
	'merge.currentHeaderBackground': ['red', 0.15],
	'merge.incomingContentBackground': ['green', 0.1],
	'merge.incomingHeaderBackground': ['green', 0.15],

	'notificationCenter.border': ['gray-600'],
	'notificationCenterHeader.background': ['gray-600'],
	'notificationCenterHeader.foreground': ['gray-300'],

	'notificationLink.foreground': ['yellow'],

	'notificationToast.border': ['gray-600'],

	'notifications.background': ['gray-600'],
	'notifications.border': ['gray-600'],
	'notifications.foreground': ['gray-200'],

	'panel.background': ['gray-700'],
	'panel.border': ['gray-600', 0.7],
	'panel.dropBorder': ['yellow', 0.5],

	'panelTitle.activeBorder': ['yellow'],
	'panelTitle.activeForeground': ['yellow'],
	'panelTitle.inactiveForeground': ['gray-300'],

	'peekView.border': ['gray-700'],

	'peekViewEditor.background': ['gray-600'],
	'peekViewEditor.matchHighlightBackground': ['gray-500'],

	'peekViewEditorGutter.background': ['gray-600'],

	'peekViewResult.background': ['gray-600'],
	'peekViewResult.fileForeground': ['gray-300'],
	'peekViewResult.lineForeground': ['gray-300'],
	'peekViewResult.matchHighlightBackground': ['gray-500'],
	'peekViewResult.selectionBackground': ['gray-600'],
	'peekViewResult.selectionForeground': ['gray-100'],

	'peekViewTitle.background': ['gray-600'],
	'peekViewTitleDescription.foreground': ['gray-300'],

	'peekViewTitleLabel.foreground': ['gray-100'],

	'pickerGroup.border': ['gray-700'],
	'pickerGroup.foreground': ['gray-500'],

	'progressBar.background': ['gray-600'],

	'sash.hoverBorder': ['yellow'],

	'scrollbar.shadow': ['gray-700'],

	'scrollbarSlider.activeBackground': ['gray-100', 0.05],
	'scrollbarSlider.background': ['gray-100', 0.05],
	'scrollbarSlider.hoverBackground': ['gray-100', 0.05],

	'selection.background': ['gray-100', 0.15],

	'settings.checkboxBackground': ['gray-600'],
	'settings.checkboxBorder': ['gray-600'],
	'settings.checkboxForeground': ['gray-100'],
	'settings.dropdownBackground': ['gray-600'],
	'settings.dropdownBorder': ['gray-600'],
	'settings.dropdownForeground': ['gray-100'],
	'settings.dropdownListBorder': ['gray-300'],
	'settings.headerForeground': ['yellow'],
	'settings.modifiedItemIndicator': ['yellow'],
	'settings.numberInputBackground': ['gray-600'],
	'settings.numberInputBorder': ['gray-600'],
	'settings.numberInputForeground': ['gray-100'],
	'settings.textInputBackground': ['gray-600'],
	'settings.textInputBorder': ['gray-600'],
	'settings.textInputForeground': ['gray-100'],

	'statusBar.background': ['gray-800'],
	'statusBar.border': ['gray-700', 0.5],
	'statusBar.debuggingBackground': ['blue', 0.6],
	'statusBar.debuggingBorder': ['gray-800'],
	'statusBar.debuggingForeground': ['gray-700'],
	'statusBar.foreground': ['gray-300'],
	'statusBar.noFolderBackground': ['gray-800'],
	'statusBar.noFolderBorder': ['gray-900'],
	'statusBar.noFolderForeground': ['gray-400'],

	'statusBarItem.activeBackground': ['gray-700'],
	'statusBarItem.hoverBackground': ['gray-700', 0.15],
	'statusBarItem.prominentBackground': ['gray-600'],
	'statusBarItem.prominentHoverBackground': ['gray-600'],

	'terminal.ansiBlack': ['gray-600'],
	'terminal.ansiBlue': ['orange'],
	'terminal.ansiBrightBlack': ['gray-400'],
	'terminal.ansiBrightBlue': ['orange'],
	'terminal.ansiBrightCyan': ['cyan'],
	'terminal.ansiBrightGreen': ['green'],
	'terminal.ansiBrightMagenta': ['blue'],
	'terminal.ansiBrightRed': ['red'],
	'terminal.ansiBrightWhite': ['gray-100'],
	'terminal.ansiBrightYellow': ['yellow'],
	'terminal.ansiCyan': ['cyan'],
	'terminal.ansiGreen': ['green'],
	'terminal.ansiMagenta': ['blue'],
	'terminal.ansiRed': ['red'],
	'terminal.ansiWhite': ['gray-100'],
	'terminal.ansiYellow': ['yellow'],
	'terminal.background': ['gray-700'],
	'terminal.foreground': ['gray-100'],
	'terminal.selectionBackground': ['gray-100', 0.15],

	'terminalCursor.background': ['gray-900', 0],
	'terminalCursor.foreground': ['gray-100'],

	'textBlockQuote.background': ['gray-600'],
	'textBlockQuote.border': ['gray-600'],

	'textCodeBlock.background': ['gray-600'],

	'textLink.activeForeground': ['gray-100'],
	'textLink.foreground': ['yellow'],

	'textPreformat.foreground': ['gray-100'],

	'textSeparator.foreground': ['gray-400'],

	'titleBar.activeBackground': ['gray-800'],
	'titleBar.activeForeground': ['gray-300'],
	'titleBar.border': ['gray-900'],
	'titleBar.inactiveBackground': ['gray-800'],
	'titleBar.inactiveForeground': ['gray-500'],

	'walkThrough.embeddedEditorBackground': ['gray-800'],

	'welcomePage.buttonBackground': ['gray-600'],
	'welcomePage.buttonHoverBackground': ['gray-500'],

	'widget.shadow': ['gray-800', 0.3],
	'widget.border': ['gray-600', 0.1],
}