const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: resolve(__dirname, './src/index.ts'),
	outDir: resolve(__dirname, './dist'),
	libraryName: 'Hello',
	alias: {
		'@com': resolve(__dirname, './src/components/')
	},
	externals: {
		module: [nodeExternals({
			modulesDir: resolve(__dirname, '../../../../../node_modules/') // Yarn workspace node modules
		})]
	},
	noProfiler: true
};
