import { BaseOptions, CommonOptions } from '@gluons/vue-pack-types';

import createBaseConfig from './createBaseConfig';

/**
 * Create Common JS config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {CommonOptions} options Options
 * @returns {Promise<any>} `webpack-chain`'s config instance
 */
export default async function createCJSConfig(options: CommonOptions): Promise<any> {
	const baseOptions: BaseOptions = Object.assign({ minimize: false }, options);
	const { externals: { module: moduleExternals } } = options;

	const config = await createBaseConfig(baseOptions);

	config
		.output
			.filename('[name].cjs.js')
			.libraryTarget('commonjs2')
			.libraryExport('default')
			.end()
		.externals(moduleExternals)
	;

	return config;
}
