import { Configuration as WebpackConfiguration } from 'webpack';

import Configuration, { toCommonOptions, toWebOptions } from './interfaces/Configuration';
import createCJSConfig from './lib/createCJSConfig';
import createESMConfig from './lib/createESMConfig';
import createWebConfig from './lib/createWebConfig';
import fulfilConfig from './lib/fulfilConfig';
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
	config = fulfilConfig(config);

	const commonJSConfig = createCJSConfig(toCommonOptions(config));
	const esModuleConfig = createESMConfig(toCommonOptions(config));
	const webUnminConfig = createWebConfig(toWebOptions(config, false));
	const webMinConfig = createWebConfig(toWebOptions(config, true));

	// All `webpack-chain` config instances
	const configs = [
		commonJSConfig,
		esModuleConfig,
		webUnminConfig,
		webMinConfig
	];
	configs.forEach((c, i) => {
		infuseWebpackBar(c, barOptions[i]);
	});

	return configs.map(c => c.toConfig() as WebpackConfiguration);
}
