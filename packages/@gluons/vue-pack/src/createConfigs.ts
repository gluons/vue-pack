import {
	Configuration,
	ConfigurationMethods,
	WebpackChainConfigGroup
} from '@gluons/vue-pack-types';
import { Configuration as WebpackConfiguration } from 'webpack';

import createModuleConfig, { Options as CreateModuleConfigOptions } from './lib/createModuleConfig';
import createWebConfig from './lib/createWebConfig';
import executeChainWebpack from './lib/executeChainWebpack';
import executePlugins from './lib/executePlugins';
import infuseWebpackBar from './lib/infuser/infuseWebpackBar';

const { toBaseOptions, toWebOptions } = ConfigurationMethods;

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
	const baseOptions = toBaseOptions(config);
	const commonJSOptions: CreateModuleConfigOptions = Object.assign(
		{},
		baseOptions,
		{
			moduleType: 'common'
		} as CreateModuleConfigOptions
	);
	const esModuleOptions: CreateModuleConfigOptions = Object.assign(
		{},
		baseOptions,
		{
			moduleType: 'es'
		} as CreateModuleConfigOptions
	);

	const commonJSConfig = await createModuleConfig(commonJSOptions);
	const esModuleConfig = await createModuleConfig(esModuleOptions);
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

	const webpackConfigGroup: WebpackChainConfigGroup = {
		commonJSConfig,
		esModuleConfig,
		webUnminConfig,
		webMinConfig
	};
	executePlugins(webpackConfigGroup, config); // Execute plugins
	executeChainWebpack(webpackConfigGroup, config); // Execute user's custom chain webpack

	return allConfigs.map(c => c.toConfig() as WebpackConfiguration);
}
