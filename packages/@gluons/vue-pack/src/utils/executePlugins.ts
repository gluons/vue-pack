import Configuration from '../types/Configuration';
import Plugin, { PluginContext, PluginWebpackConfigGroup } from '../types/Plugin';

/**
 * Execute plugins.
 *
 * @export
 * @param {PluginWebpackConfigGroup} webpackConfigs All `webpack-chain`'s configs instance
 * @param {Configuration} config `vue-pack`'s configuration
 */
export default function executePlugins(webpackConfigs: PluginWebpackConfigGroup, config: Configuration): void {
	if (Array.isArray(config.plugins) && (config.plugins.length > 0)) {
		const context: PluginContext = {
			webpackConfigs,
			config
		};

		config.plugins.forEach((plugin: Plugin) => {
			plugin(context);
		});
	}
}
