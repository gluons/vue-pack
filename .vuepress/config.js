module.exports = {
	base: '/vue-pack/',
	title: 'Vue Pack',
	description: 'Bundle Vue.js library via webpack.',
	themeConfig: {
		repo: 'gluons/vue-pack',
		docsBranch: 'docs',
		nav: [
			{
				text: 'Get Started',
				link: '/get-started/'
			},
			{
				text: 'Configuration',
				link: '/configuration/'
			},
			{
				text: 'Development Options',
				link: '/dev-options/'
			},
			{
				text: 'Externals',
				link: '/externals/'
			},
			{
				text: 'Plugins',
				items: [
					{
						text: 'Plugin',
						link: '/plugin/'
					},
					{
						text: 'Creating a plugin',
						link: '/creating-plugin/'
					}
				]
			}
		]
	}
};
