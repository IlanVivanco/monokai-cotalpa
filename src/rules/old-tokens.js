export default [
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
			foreground: ['gray-400'],
		},
	},
	{
		scope: ['source.php comment.block.documentation.phpdoc.php meta.other.type.phpdoc.php'],
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'comment storage.type',
		settings: {
			foreground: ['gray-400'],
		},
	},
	{
		scope: 'comment entity.name.type',
		settings: {
			foreground: ['gray-200'],
		},
	},
	{
		scope: ['comment variable', 'comment variable.other'],
		settings: {
			foreground: ['gray-200'],
		},
	},
	{
		scope: 'comment keyword.codetag.notation',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'comment.git-status.header.remote',
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'comment.git-status.header.local',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'comment.other.git-status.head',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'constant',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.other',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'constant.other.php',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.other.property',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.other.citation.latex',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.other.color',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.other.character-class.escape',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.other.key',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.other.symbol',
		settings: {
			foreground: ['orange'],
		},
	},
	{
		scope: 'constant.numeric',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.language',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.character.escape',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'constant.numeric.line-number.find-in-files',
		settings: {
			foreground: ['gray-500'],
		},
	},
	{
		scope: 'constant.numeric.line-number.match.find-in-files',
		settings: {
			foreground: ['yellow'],
		},
	},
	{
		scope: 'entity.name.section',
		settings: {
			foreground: ['yellow'],
		},
	},
	{
		scope: ['entity.name.function', 'entity.name.function.templated'],
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: 'entity.name.function.member.static',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: ['entity.name.type.class.templated', 'entity.name.type.class.generic', 'entity.name.type.namespace'],
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'entity.name.label',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'entity.name.function.preprocessor',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'entity.name',
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: 'entity.name.class',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'entity.name.constant',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'entity.name.namespace',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'entity.other.inherited-class',
		settings: {
			fontStyle: 'italic',
			foreground: ['cyan'],
		},
	},
	{
		scope: 'entity.name.function',
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: [
			'entity.name.tag',
			'entity.name.tag.js.jsx support.class.component.js.jsx',
			'entity.name.tag support.class.component',
		],
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'entity.name.function.operator',
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: ['entity.name.type', 'entity.name.type.class.reference', 'entity.name.type.class.value'],
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'entity.other.attribute-name',
		settings: {
			fontStyle: 'italic',
			foreground: ['cyan'],
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
			foreground: ['green'],
		},
	},
	{
		scope: 'entity.other.attribute-name.id.css',
		settings: {
			foreground: ['orange'],
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
			foreground: ['cyan'],
		},
	},
	{
		scope: ['entity.name.function', 'support.function'],
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: 'entity.other.git-status.hex',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'entity.other.jinja2.delimiter',
		settings: {
			foreground: ['gray-300'],
		},
	},
	{
		scope: 'entity.name.operator.custom-literal',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'entity.name.operator.custom-literal.string',
		settings: {
			foreground: ['yellow'],
		},
	},
	{
		scope: 'entity.name.operator.custom-literal.number',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'keyword.control',
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'keyword.control.directive',
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: ['keyword.operator', 'keyword.operator.member', 'keyword.operator.new'],
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'keyword.other.substitution',
		settings: {
			foreground: ['gray-300'],
		},
	},
	{
		scope: ['keyword.other.template.begin', 'keyword.other.template.end'],
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: [
			'keyword.operator.heading.restructuredtext',
			'keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext',
		],
		settings: {
			foreground: ['gray-300'],
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
		scope: 'markup.underline.link',
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: ['markup.inserted', 'markup.inserted punctuation.definition.inserted'],
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: ['markup.deleted', 'markup.deleted punctuation.definition.deleted'],
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: ['markup.changed', 'markup.changed punctuation.definition.changed'],
		settings: {
			foreground: ['yellow'],
		},
	},
	{
		scope: ['markup.ignored', 'markup.ignored punctuation.definition.ignored'],
		settings: {
			foreground: ['gray-300'],
		},
	},
	{
		scope: 'markup.untracked',
		settings: {
			foreground: ['gray-300'],
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
			foreground: ['gray-300'],
		},
	},
	{
		scope: ['meta.function-call.python', 'meta.function-call.arguments.python meta.function-call.python'],
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: 'meta.function-call.python meta.function-call.arguments.python',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'meta.instance.constructor',
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: ['meta.attribute-with-value.class string', 'meta.attribute.class.html string'],
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: ['meta.attribute-with-value.id string', 'meta.attribute.id.html string'],
		settings: {
			foreground: ['orange'],
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
			foreground: ['gray-100'],
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
			foreground: ['yellow'],
		},
	},
	{
		scope: ['meta.object.member', 'variable.other meta.objectliteral meta.object.member'],
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'meta.object-literal.key',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'meta.property-list.css variable.other',
		settings: {
			foreground: ['orange'],
		},
	},
	{
		scope: ['entity.name.constant.preprocessor', 'meta.preprocessor'],
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'meta.diff.git-diff.header',
		settings: {
			foreground: ['yellow'],
		},
	},
	{
		scope: 'punctuation',
		settings: {
			foreground: ['gray-300'],
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
			foreground: ['gray-300'],
		},
	},
	{
		scope: 'punctuation.definition.group',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'punctuation.definition.comment',
		settings: {
			foreground: ['gray-400'],
		},
	},
	{
		scope: [
			'punctuation.definition.variable',
			'punctuation.definition.keyword.scss',
			'punctuation.definition.entity.css',
		],
		settings: {
			foreground: ['gray-200'],
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
			foreground: ['orange'],
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
			foreground: ['red'],
		},
	},
	{
		scope: ['markup.inline.raw'],
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'region.redish',
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'region.orangish',
		settings: {
			foreground: ['orange'],
		},
	},
	{
		scope: 'region.yellowish',
		settings: {
			foreground: ['yellow'],
		},
	},
	{
		scope: 'region.greenish',
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: 'region.bluish',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'region.purplish',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'region.pinkish',
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'region.whitish',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'source',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: ['source.scss', 'source.sass'],
		settings: {
			foreground: ['gray-300'],
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
			foreground: ['orange'],
		},
	},
	{
		scope: 'source.git-show.commit.sha',
		settings: {
			foreground: ['blue'],
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
			foreground: ['gray-300'],
		},
	},
	{
		scope: [
			'source.git-show meta.diff.git-diff.header.extended.index.from-sha',
			'source.git-show meta.diff.git-diff.header.extended.index.to-sha',
		],
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'source.git-show meta.diff.range.unified',
		settings: {
			foreground: ['orange'],
		},
	},
	{
		scope: ['source.git-show meta.diff.header.from-file', 'source.git-show meta.diff.header.to-file'],
		settings: {
			foreground: ['gray-300'],
		},
	},
	{
		scope: 'storage',
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'storage.type',
		settings: {
			fontStyle: 'italic',
			foreground: ['cyan'],
		},
	},
	{
		scope: 'storage.type.extends',
		settings: {
			fontStyle: '',
			foreground: ['red'],
		},
	},
	{
		scope: 'storage.type.function.arrow',
		settings: {
			fontStyle: '',
			foreground: ['red'],
		},
	},
	{
		scope: ['storage.modifier', 'storage.type.modifier'],
		settings: {
			fontStyle: 'italic',
			foreground: ['red'],
		},
	},
	{
		scope: 'storage.class.restructuredtext.ref',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'string',
		settings: {
			foreground: ['yellow'],
		},
	},
	{
		scope: 'string.unquoted.label',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'string source',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'string source punctuation.section.embedded',
		settings: {
			foreground: ['gray-300'],
		},
	},
	{
		scope: ['string.other.link.title', 'string.other.link.description'],
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'string.other.link.description.title',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: ['string.regexp punctuation.definition.string.begin', 'string.regexp punctuation.definition.string.end'],
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: ['string.other.ref', 'string.other.restructuredtext.ref'],
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: 'string.other.git-status.help.key',
		settings: {
			foreground: ['gray-200'],
		},
	},
	{
		scope: 'string.other.git-status.remote',
		settings: {
			foreground: ['red'],
		},
	},
	{
		scope: 'support.constant',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'support.constant.handlebars',
		settings: {
			foreground: ['gray-300'],
		},
	},
	{
		scope: 'support.type.vendor-prefix.css',
		settings: {
			foreground: ['gray-200'],
		},
	},
	{
		scope: 'support.function',
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: ['support.type', 'entity.name.type.object.console'],
		settings: {
			fontStyle: 'italic',
			foreground: ['cyan'],
		},
	},
	{
		scope: 'support.variable',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'support.type.property-name',
		settings: {
			fontStyle: '',
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'support.class',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'text',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'text.find-in-files',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: ['blue', 'variable.other'],
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: ['variable.parameter', 'parameters variable.function'],
		settings: {
			fontStyle: 'italic',
			foreground: ['orange'],
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
			foreground: ['gray-200'],
		},
	},
	{
		scope: 'variable.language.arguments',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'variable.other.class',
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: 'variable.other.constant',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'variable.other.member',
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'variable.other.enummember',
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: ['variable.other.property', 'variable.other.property.static', 'variable.other.event'],
		settings: {
			foreground: ['gray-100'],
		},
	},
	{
		scope: 'variable.function',
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: 'variable.other.substitution',
		settings: {
			foreground: ['orange'],
		},
	},
	{
		scope: ['source.ruby variable.other.readwrite.instance.ruby', 'source.ruby variable.other.readwrite.class.ruby'],
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: 'source.jinja2 variable.other.jinja2.block',
		settings: {
			foreground: ['green'],
		},
	},
	{
		scope: 'source.jinja2 variable.other.jinja2',
		settings: {
			foreground: ['orange'],
		},
	},
	{
		scope: ['keyword.other.DML.sql', 'keyword.other.DDL.create.II.sql'],
		settings: {
			foreground: ['cyan'],
		},
	},
	{
		scope: ['constant.numeric.sql'],
		settings: {
			foreground: ['blue'],
		},
	},
	{
		scope: ['keyword.other.sql'],
		settings: {
			foreground: ['green'],
		},
	},
]
