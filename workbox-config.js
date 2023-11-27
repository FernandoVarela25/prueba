module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{json,html,js,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};