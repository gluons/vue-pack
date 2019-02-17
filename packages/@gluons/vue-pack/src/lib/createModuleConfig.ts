import { BaseOptions } from '@gluons/vue-pack-types';

import createBaseConfig from './createBaseConfig';
import infuseCJSOutput from './infuser/infuseCJSOutput';
import infuseESMOutput from './infuser/infuseESMOutput';
import infuseSSROutput from './infuser/infuseSSROutput';
import infuseWebpackModule from './infuser/infuseWebpackModule';
import infuseWebpackOptimization from './infuser/infuseWebpackOptimization';
import infuseWebpackPlugins from './infuser/infuseWebpackPlugins';

export type Options = BaseOptions & { moduleType: 'common' | 'es' | 'ssr' };

/**
 * Create module config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {Options} options Options
 * @returns {Promise<any>} `webpack-chain`'s config instance
 */
export default async function createModuleConfig(
	options: Options
): Promise<any> {
	const {
		fileName,
		outDir,
		define,
		sourceMap,
		externals: { module: moduleExternals },
		moduleType
	} = options;
	const config = await createBaseConfig(options);

	if (moduleType === 'common') {
		infuseCJSOutput(config);
	} else if (moduleType === 'es') {
		infuseESMOutput(config);
	} else {
		infuseSSROutput(config);
		config.target('node');
	}

	infuseWebpackOptimization(config, false);
	await infuseWebpackModule({
		config,
		outDir,
		sourceMap,
		ssr: moduleType === 'ssr'
	});
	infuseWebpackPlugins({
		config,
		fileName,
		minimize: false,
		sourceMap,
		define
	});

	config.externals(moduleExternals);

	return config;
}
