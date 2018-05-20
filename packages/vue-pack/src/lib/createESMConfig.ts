import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import BaseOptions from '../interfaces/BaseOptions';
import CommonOptions from '../interfaces/CommonOptions';
import createBaseConfig from './createBaseConfig';

export default function createESMConfig(options: CommonOptions): Configuration {
	const baseOptions: BaseOptions = Object.assign({ minimize: false }, options);

	const baseConfig = createBaseConfig(baseOptions);
	const esModuleConfig: Configuration = merge(baseConfig, {
		output: {
			filename: '[name].es.js',
			libraryTarget: 'commonjs2'
		},
		externals: [
			nodeExternals()
		],
		target: 'node'
	});

	return esModuleConfig;
}
