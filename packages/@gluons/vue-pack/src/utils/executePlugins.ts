import Configuration from '../types/Configuration';
import Plugin, { PluginConfigGroup, PluginContext } from '../types/Plugin';

/**
 * Execute plugins.
 *
 * @export
 * @param {PluginConfigGroup} webpackConfigs All `webpack-chain`'s config instances
 * @param {Configuration} config `vue-pack`'s configuration
 */
export default function executePlugins(webpackConfigs: PluginConfigGroup, config: Configuration): void {
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
