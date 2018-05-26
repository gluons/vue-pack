import nodeExternals from 'webpack-node-externals';

import BaseOptions from '../interfaces/BaseOptions';
import CommonOptions from '../interfaces/CommonOptions';
import createBaseConfig from './createBaseConfig';

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
