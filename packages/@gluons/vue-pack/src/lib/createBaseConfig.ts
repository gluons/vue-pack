import Config from 'webpack-chain';

import BaseOptions from '../types/BaseOptions';
import infuseWebpackModule from './infuseWebpackModule';
import infuseWebpackPlugins from './infuseWebpackPlugins';

/**
 * Create base config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {BaseOptions} options Options
 * @returns {Promise<any>} `webpack-chain`'s config instance
 */
export default async function createBaseConfig(options: BaseOptions): Promise<any> {
	const {
		entry,
		fileName,
		outDir,
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
			.path(outDir)
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

	await infuseWebpackModule(config, minimize, sourceMap);
	infuseWebpackPlugins(config, cssFileName);

	return config;
}
