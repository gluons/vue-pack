import { BaseOptions } from '@gluons/vue-pack-types';
import Config from 'webpack-chain';

import infuseAliases from './infuser/infuseAliases';

/**
 * Create base config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {BaseOptions} options Options
 * @returns {Promise<any>} `webpack-chain`'s config instance
 */
export default async function createBaseConfig(
	options: BaseOptions
): Promise<any> {
	const { entry, fileName, outDir, alias, sourceMap } = options;

	const config = new Config(); // webpack-chain Config

	config
		.mode('production')
		.entry(fileName)
		.add(entry)
		.end()
		.output.path(outDir)
		.end()
		.resolve.extensions.merge(['.vue', '.ts', '.js', '.json'])
		.end()
		.end()
		.devtool(sourceMap ? 'source-map' : false)
		.stats('none');

	infuseAliases(config, alias);

	return config;
}
