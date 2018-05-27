import WebOptions from '../interfaces/WebOptions';
import createBaseConfig from './createBaseConfig';

/**
 * Create web config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {WebOptions} options Options
 * @returns {any} `webpack-chain`'s config instance
 */
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
