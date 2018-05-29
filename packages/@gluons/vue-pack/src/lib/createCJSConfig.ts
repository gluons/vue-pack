import nodeExternals from 'webpack-node-externals';

import BaseOptions from '../types/BaseOptions';
import CommonOptions from '../types/CommonOptions';
import createBaseConfig from './createBaseConfig';

/**
 * Create Common JS config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {CommonOptions} options Options
 * @returns {any} `webpack-chain`'s config instance
 */
export default function createCJSConfig(options: CommonOptions): any {
	const baseOptions: BaseOptions = Object.assign({ minimize: false }, options);

	const config = createBaseConfig(baseOptions);

	config
		.output
			.filename('[name].cjs.js')
			.libraryTarget('commonjs2')
			.libraryExport('default')
			.end()
		.externals([nodeExternals()])
		.target('node')
	;

	return config;
}
