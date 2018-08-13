import { Configuration } from '@gluons/vue-pack';

export default {
	entry: './src/index.js',
	libraryName: 'Hello',
	fileName: 'hello-plugin',
	outDir: './bundles',
	sourceMap: false
} as Configuration;
