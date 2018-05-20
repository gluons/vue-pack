import { Configuration } from 'webpack';

import BaseOptions from '../interfaces/BaseOptions';
import createWebpackModule from './createWebpackModule';
import createWebpackPlugins from './createWebpackPlugins';

export default function createBaseConfig(options: BaseOptions): Configuration {
	const {
		entry,
		fileName,
		outPath,
		minimize,
		sourceMap
	} = options;

	const cssFileName = minimize ? `${fileName}.min.css` : `${fileName}.css`;

	const module = createWebpackModule(minimize, sourceMap);
	const plugins = createWebpackPlugins(cssFileName);

	const config: Configuration = {
		mode: 'production',
		entry: {
			[fileName]: entry
		},
		output: {
			path: outPath
		},
		module,
		resolve: {
			extensions: ['.vue', '.ts', '.js', '.json']
		},
		optimization: {
			minimize,
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true
					}
				}
			}
		},
		plugins,
		devtool: sourceMap ? 'source-map' : false
	};

	return config;
}
