import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import BaseOptions from '../interfaces/BaseOptions';
import CommonOptions from '../interfaces/CommonOptions';
import createBaseConfig from './createBaseConfig';

export default function createCJSConfig(options: CommonOptions): Configuration {
	const baseOptions: BaseOptions = Object.assign({ minimize: false }, options);

	const baseConfig = createBaseConfig(baseOptions);
	const commonJSConfig: Configuration = merge(baseConfig, {
		output: {
			filename: '[name].cjs.js',
			libraryTarget: 'commonjs2',
			libraryExport: 'default'
		},
		externals: [
			nodeExternals()
		],
		target: 'node'
	});

	return commonJSConfig;
}
