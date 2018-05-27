import Config from 'webpack-chain';

import BaseOptions from '../interfaces/BaseOptions';
import infuseWebpackModule from './infuseWebpackModule';
import infuseWebpackPlugins from './infuseWebpackPlugins';

/**
 * Create base config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {BaseOptions} options Options
 * @returns {any} `webpack-chain`'s config instance
 */
export default function createBaseConfig(options: BaseOptions): any {
	const {
		entry,
		fileName,
		outPath,
		minimize,
		sourceMap
	} = options;

	const cssFileName = minimize ? `${fileName}.min.css` : `${fileName}.css`;

	const config = new Config(); // webpack-chain Config

	config
		.mode('production')
		.entry(fileName)
			.add(entry)
			.end()
		.output
			.path(outPath)
			.end()
		.resolve
			.extensions
				.merge(['.vue', '.ts', '.js', '.json'])
				.end()
			.end()
		.optimization
			.minimize(minimize)
			.splitChunks({
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true
					}
				}
			})
			.end()
		.devtool(sourceMap ? 'source-map' : false)
		.stats('none')
	;

	infuseWebpackModule(config, minimize, sourceMap);
	infuseWebpackPlugins(config, cssFileName);

	return config;
}
