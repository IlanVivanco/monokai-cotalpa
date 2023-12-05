export default [
	{
		name: 'Comments',
		scope: ['comment', 'comment.block.documentation.phpdoc.php'],
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['gray-400'], light: ['gray-600'] },
		},
	},
	{
		name: 'Comments special token',
		scope: ['comment entity.name.type', 'comment variable', 'comment variable.other'],
		settings: {
			foreground: { dark: ['gray-200'], light: ['gray-200'] },
		},
	},
	{
		name: 'Constants',
		scope: 'constant',
		settings: {
			foreground: { dark: ['blue'], light: ['blue'] },
		},
	},
	{
		name: 'Constants objects',
		scope: 'constant.object',
		settings: {
			foreground: { dark: ['green'], light: ['green'] },
		},
	},
	{
		name: 'Escape characters',
		scope: 'constant.character.escape',
		settings: {
			foreground: { dark: ['orange'], light: ['orange'] },
		},
	},
	{
		name: 'Named entities',
		scope: 'entity.name',
		settings: {
			foreground: { dark: ['cyan'], light: ['cyan'] },
		},
	},
	{
		name: 'Inherited classes & namespaces',
		scope: [
			'entity.name.type.class',
			'entity.name.type.class.generic',
			'entity.other.inherited-class',
			'support.class',
			'support.type.primitive',
			'variable.other.liquid',
			'keyword.other.type.php',
			'keyword.other.namespace',
			'keyword.other.use',
		],
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['cyan'], light: ['cyan'] },
		},
	},
	{
		name: 'Inherited classes & namespaces',
		scope: [
			'support.type.primitive',
			'variable.other.liquid',
			'keyword.other.type.php',
			'keyword.other.namespace',
			'keyword.other.use',
		],
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['red'], light: ['red'] },
		},
	},
	{
		name: 'Function names & classes',
		scope: [
			'entity.name.function',
			'entity.name.type.namespace',
			'entity.name.type.class',
			'entity.name.type.class.generic',
			'entity.other.inherited-class',
			'support.class',
			'support.function',
			'keyword.other.sql',
		],
		settings: {
			foreground: { dark: ['green'], light: ['green'] },
		},
	},
	{
		name: 'Tags',
		scope: 'entity.name.tag',
		settings: {
			foreground: { dark: ['red'], light: ['red'] },
		},
	},
	{
		name: 'Static types',
		scope: ['entity.name.type', 'storage.type.cs'],
		settings: {
			foreground: { dark: ['cyan'], light: ['cyan'] },
		},
	},
	{
		name: 'Tag attributes',
		scope: 'entity.other.attribute-name',
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['cyan'], light: ['cyan'] },
		},
	},
	{
		name: 'CSS Class selectors',
		scope: 'entity.other.attribute-name.class',
		settings: {
			foreground: { dark: ['green'], light: ['green'] },
		},
	},
	{
		name: 'CSS ID selectors',
		scope: 'entity.other.attribute-name.id',
		settings: {
			foreground: { dark: ['orange'], light: ['orange'] },
		},
	},
	{
		name: 'Pseudo CSS',
		scope: ['entity.other.attribute-name.pseudo-element', 'entity.other.attribute-name.pseudo-class'],
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['cyan'], light: ['cyan'] },
		},
	},
	{
		name: 'Variable names',
		scope: ['entity.name.variable', 'variable'],
		settings: {
			foreground: { dark: ['blue'], light: ['blue'] },
		},
	},
	{
		name: 'Variable this',
		scope: ['variable.language.this'],
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['gray-300'], light: ['gray-500'] },
		},
	},
	{
		name: 'Operators',
		scope: ['keyword.operator', 'keyword.control'],
		settings: {
			foreground: { dark: ['red'], light: ['red'] },
		},
	},
	{
		name: 'Special operators',
		scope: [
			'keyword.other.new',
			'keyword.operator.new',
			'keyword.operator.expression',
			'keyword.operator.logical',
			'keyword.operator.delete',
			'punctuation.definition.string.template',
		],
		settings: {
			foreground: { dark: ['red'], light: ['red'] },
		},
	},
	{
		name: 'Units',
		scope: 'keyword.other.unit',
		settings: {
			foreground: { dark: ['orange'], light: ['orange'] },
		},
	},
	{
		name: 'Markup quotes',
		scope: 'markup.quote',
		settings: {
			foreground: { dark: ['gray-300'], light: ['gray-300'] },
			fontStyle: 'config',
		},
	},
	{
		name: 'Markup headings',
		scope: ['markup.heading', 'entity.name.section'],
		settings: {
			fontStyle: 'bold',
			foreground: { dark: ['yellow'], light: ['yellow'] },
		},
	},
	{
		scope: 'markup.raw',
		settings: {
			foreground: { dark: ['orange'], light: ['orange'] },
		},
	},
	{
		scope: 'markup.underline',
		settings: {
			fontStyle: 'underline',
		},
	},
	{
		name: 'Markup bold',
		scope: 'markup.bold',
		settings: {
			foreground: { dark: ['blue'], light: ['blue'] },
			fontStyle: 'bold',
		},
	},
	{
		name: 'Markup italics',
		scope: 'markup.italic',
		settings: {
			foreground: { dark: ['cyan'], light: ['cyan'] },
			fontStyle: 'italic',
		},
	},
	{
		name: 'Markup code',
		scope: ['markup.inline.raw', 'markup.fenced_code.block'],
		settings: {
			foreground: { dark: ['cyan'], light: ['cyan'] },
		},
	},
	{
		name: 'Markup links',
		scope: ['markup.underline.link'],
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['green'], light: ['green'] },
		},
	},
	{
		name: 'Markup images',
		scope: ['markup.inserted', 'markup.inserted punctuation.definition.inserted'],
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['red'], light: ['red'] },
		},
	},
	{
		name: 'Markup deprecated',
		scope: 'invalid.deprecated',
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['orange'], light: ['orange'] },
		},
	},
	{
		name: 'Storage keywords',
		scope: 'storage',
		settings: {
			foreground: { dark: ['red'], light: ['red'] },
		},
	},
	{
		name: 'Storage type',
		scope: ['storage.type'],
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['cyan'], light: ['cyan'] },
		},
	},
	{
		name: 'Keywords',
		scope: ['keyword.other.phpdoc.php', 'keyword.other.DML'],
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['blue'], light: ['blue'] },
		},
	},
	{
		name: 'JS arrow function',
		scope: 'storage.type.function.arrow',
		settings: {
			foreground: { dark: ['red'], light: ['red'] },
		},
	},
	{
		name: 'Strings',
		scope: ['string.quoted', 'string.template'],
		settings: {
			foreground: { dark: ['yellow'], light: ['yellow'] },
		},
	},
	{
		name: 'Regex',
		scope: 'string.regexp',
		settings: {
			foreground: { dark: ['red'], light: ['red'] },
		},
	},
	{
		name: 'Markup link descriptions',
		scope: 'string.other.link',
		settings: {
			fontStyle: 'config',
			foreground: { dark: ['orange'], light: ['orange'] },
		},
	},
	{
		name: 'Provieded variables',
		scope: 'support.variable',
		settings: {
			foreground: { dark: ['cyan'], light: ['cyan'] },
		},
	},
	{
		name: 'Object/JSON property names',
		scope: ['support.type.property-name', 'meta.object-literal.key'],
		settings: {
			foreground: { dark: ['gray-100'], light: ['gray-100'] },
		},
	},
	{
		name: 'CSS property names',
		scope: 'support.type.property-name.css',
		settings: {
			foreground: { dark: ['gray-100'], light: ['gray-100'] },
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
			fontStyle: 'config',
			foreground: { dark: ['orange'], light: ['orange'] },
		},
	},
	{
		name: 'Language variables',
		scope: ['variable.language'],
		settings: {
			foreground: { dark: ['gray-200'], light: ['gray-200'] },
		},
	},
	{
		name: 'Other varialbes',
		scope: [
			'variable.other',
			'variable.other.readwrite.alias.js',
			'variable.other.readwrite.js',
			'variable.other.property',
			'variable.other.property.static',
			'variable.other.event',
			'variable.other.php',
			'variable.graphql',
			'source.sql.embedded',
		],
		settings: {
			foreground: { dark: ['gray-100'], light: ['gray-100'] },
		},
	},
	{
		name: 'Language constants',
		scope: 'support.constant',
		settings: {
			foreground: { dark: ['cyan'], light: ['cyan'] },
		},
	},
	{
		name: 'Other constants',
		scope: 'constant.other',
		settings: {
			foreground: { dark: ['gray-100'], light: ['gray-100'] },
		},
	},
	{
		name: 'PHP constants',
		scope: ['constant.other.php', 'constant.other.property'],
		settings: {
			foreground: { dark: ['blue'], light: ['blue'] },
		},
	},
	{
		name: 'Parameters',
		scope: 'variable.parameter',
		settings: {
			foreground: { dark: ['orange'], light: ['orange'] },
			fontStyle: 'config',
		},
	},
	{
		name: 'Embedded template punctuation',
		scope: ['string.template meta.embedded', 'meta.other.type.phpdoc.php'],
		settings: {
			foreground: { dark: ['gray-200'], light: ['gray-200'] },
		},
	},
	{
		name: 'Tag brackets',
		scope: 'punctuation.definition.tag',
		settings: {
			foreground: { dark: ['gray-300'], light: ['gray-300'] },
		},
	},
	{
		name: 'Punctuation separators',
		scope: ['punctuation.separator', 'punctuation.definition.template-expression', 'punctuation.terminator'],
		settings: {
			foreground: { dark: ['gray-300'], light: ['gray-500'] },
		},
	},
	{
		name: 'Embedded section punctuation',
		scope: 'punctuation.section.embedded',
		settings: {
			foreground: { dark: ['orange'], light: ['orange'] },
		},
	},
]
