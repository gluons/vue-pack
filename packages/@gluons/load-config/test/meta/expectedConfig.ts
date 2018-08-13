import { Configuration } from '@gluons/vue-pack';

export default {
	entry: './src/index.js',
	libraryName: 'Hello',
	fileName: 'hello-plugin',
	outDir: './bundles',
	sourceMap: false
} as Configuration;

export const expectedPrivilege: Configuration = {
	entry: './src/index.js',
	libraryName: 'Hi',
	fileName: 'hi-plugin',
	outDir: './bundles',
	sourceMap: true
};
