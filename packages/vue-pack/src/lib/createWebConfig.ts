import WebOptions from '../interfaces/WebOptions';
import createBaseConfig from './createBaseConfig';

export default function createWebConfig(options: WebOptions): any {
	const { libraryName, minimize } = options;

	const config = createBaseConfig(options);

	config
		.output
			.filename(minimize ? '[name].web.min.js' : '[name].web.js')
			.library(libraryName)
			.libraryTarget('window')
			.libraryExport('default')
			.end()
		.externals({
			vue: 'Vue'
		})
	;

	return config;
}
