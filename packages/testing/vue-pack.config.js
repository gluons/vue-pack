const { resolve } = require('path');
const PostCSSPlugin = require('@gluons/vue-pack-postcss-plugin');

module.exports = {
	entry: resolve(__dirname, './src/index.ts'),
	libraryName: 'Hello',
	plugins: [
		PostCSSPlugin()
	]
};
