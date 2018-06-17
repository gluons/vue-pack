module.exports = {
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
