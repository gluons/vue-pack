const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: resolve(__dirname, './src/index.ts'),
	outDir: resolve(__dirname, './dist'),
	alias: {
		'@com': resolve(__dirname, './src/components/')
	},
	externals: {
		module: [
			nodeExternals({
				modulesDir: resolve(__dirname, '../../../../../node_modules/') // Yarn workspace node modules
			})
		]
	},
	noProfiler: true,
	dev: {
		entry: resolve(__dirname, './dev/main.ts'),
		port: 8888,
		htmlTitle: 'Hello Plugin'
	}
};
