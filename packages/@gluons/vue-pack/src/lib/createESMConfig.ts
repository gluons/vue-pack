import nodeExternals from 'webpack-node-externals';

import BaseOptions from '../types/BaseOptions';
import CommonOptions from '../types/CommonOptions';
import createBaseConfig from './createBaseConfig';

/**
 * Create ES module config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {CommonOptions} options Options
 * @returns {Promise<any>} `webpack-chain`'s config instance
 */
export default async function createESMConfig(options: CommonOptions): Promise<any> {
	const baseOptions: BaseOptions = Object.assign({ minimize: false }, options);

	const config = await createBaseConfig(baseOptions);

	config
		.output
			.filename('[name].es.js')
			.libraryTarget('commonjs2')
			.end()
		.externals([nodeExternals()])
	;

	return config;
}
