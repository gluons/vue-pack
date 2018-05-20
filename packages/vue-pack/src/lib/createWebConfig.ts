import { Configuration } from 'webpack';
import merge from 'webpack-merge';

import WebOptions from '../interfaces/WebOptions';
import createBaseConfig from './createBaseConfig';

export default function createWebConfig(options: WebOptions): Configuration {
	const { libraryName, minimize } = options;

	const baseConfig = createBaseConfig(options);
	const webConfig: Configuration = merge(baseConfig, {
		output: {
			filename: minimize ? '[name].web.min.js' : '[name].web.js',
			library: libraryName,
			libraryTarget: 'window',
			libraryExport: 'default'
		},
		externals: {
			vue: 'Vue'
		}
	});

	return webConfig;
}
