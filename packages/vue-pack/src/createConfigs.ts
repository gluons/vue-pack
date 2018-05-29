import { Configuration as WebpackConfiguration } from 'webpack';

import createCJSConfig from './lib/createCJSConfig';
import createESMConfig from './lib/createESMConfig';
import createWebConfig from './lib/createWebConfig';
import Configuration, { toCommonOptions, toWebOptions } from './types/Configuration';
import { PluginConfigGroup } from './types/Plugin';
import executePlugins from './utils/executePlugins';
import infuseWebpackBar from './utils/infuseWebpackBar';

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
 * @returns {WebpackConfiguration[]}
 */
export default function createConfigs(config: Configuration): WebpackConfiguration[] {
	const commonJSConfig = createCJSConfig(toCommonOptions(config));
	const esModuleConfig = createESMConfig(toCommonOptions(config));
	const webUnminConfig = createWebConfig(toWebOptions(config, false));
	const webMinConfig = createWebConfig(toWebOptions(config, true));

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
		infuseWebpackBar(c, barOptions[i]);
	});

	// Execute plugins
	const webpackConfigGroup: PluginConfigGroup = {
		commonJSConfig,
		esModuleConfig,
		webUnminConfig,
		webMinConfig
	};
	executePlugins(webpackConfigGroup, config);

	return allConfigs.map(c => c.toConfig() as WebpackConfiguration);
}
