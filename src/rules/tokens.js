export default [
	{
		name: 'Comments',
		scope: ['comment', 'comment.block.documentation.phpdoc.php'],
		settings: {
			fontStyle: 'config',
			foreground: ['gray-400'],
		},
	},
	{
		name: 'Comments special token',
		scope: ['comment entity.name.type', 'comment variable', 'comment variable.other'],
		settings: {
			foreground: ['gray-200'],
		},
	},
	{
		name: 'Constants',
		scope: 'constant',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		name: 'Constants objects',
		scope: 'constant.object',
		settings: {
			foreground: ['green'],
		},
	},
	{
		name: 'Escape characters',
		scope: 'constant.character.escape',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		name: 'Named entities',
		scope: 'entity.name',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		name: 'Inherited classes & namespaces',
		scope: [
			'entity.name.type.class',
			'entity.name.type.class.generic',
			'entity.other.inherited-class',
			'entity.name.type.namespace',
			'support.class',
			'variable.other.liquid',
		],
		settings: {
			fontStyle: 'config',
			foreground: ['cyan'],
		},
	},
	{
		name: 'Function names',
		scope: 'entity.name.function',
		settings: {
			foreground: ['green'],
		},
	},
	{
		name: 'Tags',
		scope: 'entity.name.tag',
		settings: {
			foreground: ['red'],
		},
	},
	{
		name: 'Static types',
		scope: ['entity.name.type', 'storage.type.cs'],
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		name: 'Tag attributes',
		scope: 'entity.other.attribute-name',
		settings: {
			fontStyle: 'config',
			foreground: ['cyan'],
		},
	},
	{
		name: 'CSS Class selectors',
		scope: 'entity.other.attribute-name.class',
		settings: {
			foreground: ['green'],
		},
	},
	{
		name: 'CSS ID selectors',
		scope: 'entity.other.attribute-name.id',
		settings: {
			foreground: ['orange'],
		},
	},
	{
		name: 'Pseudo CSS',
		scope: ['entity.other.attribute-name.pseudo-element', 'entity.other.attribute-name.pseudo-class'],
		settings: {
			fontStyle: 'config',
			foreground: ['cyan'],
		},
	},
	{
		name: 'Variable names',
		scope: ['entity.name.variable', 'variable'],
		settings: {
			foreground: ['blue'],
		},
	},
	{
		name: 'Operators',
		scope: ['keyword.operator', 'keyword.control'],
		settings: {
			foreground: ['red'],
		},
	},
	{
		name: 'Special operators',
		scope: [
			'keyword.operator.new',
			'keyword.operator.expression',
			'keyword.operator.logical',
			'keyword.operator.delete',
			'punctuation.definition.string.template',
		],
		settings: {
			foreground: ['red'],
		},
	},
	{
		name: 'Units',
		scope: 'keyword.other.unit',
		settings: {
			foreground: ['orange'],
		},
	},
	{
		name: 'Markup quotes',
		scope: 'markup.quote',
		settings: {
			foreground: ['gray-300'],
			fontStyle: 'config',
		},
	},
	{
		name: 'Markup headings',
		scope: ['markup.heading', 'entity.name.section'],
		settings: {
			fontStyle: 'bold',
			foreground: ['yellow'],
		},
	},
	{
		scope: 'markup.raw',
		settings: {
			foreground: ['orange'],
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
			foreground: ['blue'],
			fontStyle: 'bold',
		},
	},
	{
		name: 'Markup italics',
		scope: 'markup.italic',
		settings: {
			foreground: ['cyan'],
			fontStyle: 'italic',
		},
	},
	{
		name: 'Markup code',
		scope: ['markup.inline.raw', 'markup.fenced_code.block'],
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		name: 'Markup links',
		scope: ['markup.underline.link'],
		settings: {
			fontStyle: 'config',
			foreground: ['green'],
		},
	},
	{
		name: 'Markup images',
		scope: ['markup.inserted', 'markup.inserted punctuation.definition.inserted'],
		settings: {
			fontStyle: 'config',
			foreground: ['red'],
		},
	},
	{
		name: 'Storage keywords',
		scope: 'storage',
		settings: {
			foreground: ['red'],
		},
	},
	{
		name: 'Storage type & keyowrds',
		scope: ['storage.type', 'keyword.other.phpdoc.php', 'keyword.other.DML'],
		settings: {
			fontStyle: 'config',
			foreground: ['cyan'],
		},
	},
	{
		name: 'JS arrow function',
		scope: 'storage.type.function.arrow',
		settings: {
			foreground: ['red'],
		},
	},
	{
		name: 'Strings',
		scope: ['string.quoted', 'string.template'],
		settings: {
			foreground: ['yellow'],
		},
	},
	{
		name: 'Regex',
		scope: 'string.regexp',
		settings: {
			foreground: ['red'],
		},
	},
	{
		name: 'Markup link descriptions',
		scope: 'string.other.link',
		settings: {
			fontStyle: 'config',
			foreground: ['orange'],
		},
	},
	{
		name: 'Provided functions',
		scope: ['support.function', 'keyword.other.sql'],
		settings: {
			foreground: ['green'],
		},
	},
	{
		name: 'Provieded variables',
		scope: 'support.variable',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		name: 'Object/JSON property names',
		scope: ['support.type.property-name', 'meta.object-literal.key'],
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		name: 'CSS property names',
		scope: 'support.type.property-name.css',
		settings: {
			foreground: ['gray-100'],
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
			foreground: ['orange'],
		},
	},
	{
		name: 'Language variables',
		scope: ['variable.language'],
		settings: {
			foreground: ['gray-200'],
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
			foreground: ['gray-100'],
		},
	},
	{
		name: 'Language constants',
		scope: 'support.constant',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		name: 'Other constants',
		scope: 'constant.other',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		name: 'PHP constants',
		scope: ['constant.other.php', 'constant.other.property'],
		settings: {
			foreground: ['blue'],
		},
	},
	{
		name: 'Parameters',
		scope: 'variable.parameter',
		settings: {
			foreground: ['orange'],
			fontStyle: 'config',
		},
	},
	{
		name: 'Embedded template punctuation',
		scope: ['string.template meta.embedded', 'meta.other.type.phpdoc.php'],
		settings: {
			foreground: ['gray-200'],
		},
	},
	{
		name: 'Tag brackets',
		scope: 'punctuation.definition.tag',
		settings: {
			foreground: ['gray-300'],
		},
	},
	{
		name: 'Key/value separators',
		scope: ['punctuation.separator', 'punctuation.definition.template-expression'],
		settings: {
			foreground: ['gray-300'],
		},
	},
	{
		name: 'Embedded section punctuation',
		scope: 'punctuation.section.embedded',
		settings: {
			foreground: ['orange'],
		},
	},
]
