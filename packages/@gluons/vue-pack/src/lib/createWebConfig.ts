import WebOptions from '../types/WebOptions';
import createBaseConfig from './createBaseConfig';

/**
 * Create web config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {WebOptions} options Options
 * @returns {Promise<any>} `webpack-chain`'s config instance
 */
export default async function createWebConfig(options: WebOptions): Promise<any> {
	const { libraryName, minimize } = options;

	const config = await createBaseConfig(options);

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
