import {
	Configuration,
	ConfigurationMethods,
	PluginWebpackConfigGroup
} from '@gluons/vue-pack-types';
import { Configuration as WebpackConfiguration } from 'webpack';

import createCJSConfig from './lib/createCJSConfig';
import createESMConfig from './lib/createESMConfig';
import createWebConfig from './lib/createWebConfig';
import executePlugins from './utils/executePlugins';
import infuseWebpackBar from './utils/infuseWebpackBar';

const { toCommonOptions, toWebOptions } = ConfigurationMethods;

const barOptions = [
	{ name: 'CommonJS', color: 'green' },
	{ name: 'ES Module', color: 'magenta' },
	{ name: 'Web Unminified', color: 'cyan' },
	{ name: 'Web Minified', color: 'yellow' }
];

/**
 * Create all webpack's configurations. (CommonJS, ES module, Unminified Web, Minified Web)
 *
 * @export
 * @param {Configuration} config `vue-pack`'s configuration
 * @returns {Promise<WebpackConfiguration[]>}
 */
export default async function createConfigs(config: Configuration): Promise<WebpackConfiguration[]> {
	const commonJSConfig = await createCJSConfig(toCommonOptions(config));
	const esModuleConfig = await createESMConfig(toCommonOptions(config));
	const webUnminConfig = await createWebConfig(toWebOptions(config, false));
	const webMinConfig = await createWebConfig(toWebOptions(config, true));

	/**
	 * All `webpack-chain` config instances
	 */
	const allConfigs = [
		commonJSConfig,
		esModuleConfig,
		webUnminConfig,
		webMinConfig
	];
	allConfigs.forEach((c, i) => {
		infuseWebpackBar(c, barOptions[i], !config.noProfiler);
	});

	// Execute plugins
	const webpackConfigGroup: PluginWebpackConfigGroup = {
		commonJSConfig,
		esModuleConfig,
		webUnminConfig,
		webMinConfig
	};
	executePlugins(webpackConfigGroup, config);

	return allConfigs.map(c => c.toConfig() as WebpackConfiguration);
}
