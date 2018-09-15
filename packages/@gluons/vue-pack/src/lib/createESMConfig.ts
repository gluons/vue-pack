import { BaseOptions, CommonOptions } from '@gluons/vue-pack-types';

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
	const { externals: { module: moduleExternals } } = options;

	const config = await createBaseConfig(baseOptions);

	config
		.output
			.filename('[name].es.js')
			.libraryTarget('commonjs2')
			.end()
		.externals(moduleExternals)
	;

	return config;
}
