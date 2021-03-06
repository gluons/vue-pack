import { WebOptions } from '@gluons/vue-pack-types';

import createBaseConfig from './createBaseConfig';
import infuseWebpackModule from './infuser/infuseWebpackModule';
import infuseWebpackOptimization from './infuser/infuseWebpackOptimization';
import infuseWebpackPlugins from './infuser/infuseWebpackPlugins';

/**
 * Create web config via `webpack-chain`'s config instance.
 *
 * @export
 * @param {WebOptions} options Options
 * @returns {Promise<any>} `webpack-chain`'s config instance
 */
export default async function createWebConfig(
	options: WebOptions
): Promise<any> {
	const {
		libraryName,
		fileName,
		outDir,
		define,
		sourceMap,
		minimize,
		externals: { web: webExternals }
	} = options;

	const config = await createBaseConfig(options);

	config.output
		.filename(minimize ? '[name].web.min.js' : '[name].web.js')
		.library(libraryName)
		.libraryTarget('window')
		.libraryExport('default')
		.end()
		.externals(webExternals);

	infuseWebpackOptimization(config, minimize);
	await infuseWebpackModule({
		config,
		outDir,
		sourceMap,
		ssr: false
	});
	infuseWebpackPlugins({
		config,
		fileName,
		minimize,
		sourceMap,
		define
	});

	return config;
}
