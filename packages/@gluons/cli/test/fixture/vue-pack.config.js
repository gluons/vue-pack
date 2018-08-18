const { resolve } = require('path');

module.exports = {
	entry: resolve(__dirname, './src/index.ts'),
	outDir: resolve(__dirname, './dist'),
	libraryName: 'Hello',
	noProfiler: true,
	dev: {
		entry: resolve(__dirname, './dev/main.ts')
	}
};
