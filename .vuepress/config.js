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
				items: [
					{
						text: 'Configuration',
						link: '/configuration/'
					},
					{
						text: 'Externals',
						link: '/externals/'
					},
					{
						text: 'Webpack Chainer',
						link: '/webpack-chainer/'
					}
				]
			},
			{
				text: 'Development Options',
				link: '/dev-options/'
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
