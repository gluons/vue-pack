import {
	Configuration,
	Plugin,
	PluginContext,
	PluginWebpackConfigGroup
} from '@gluons/vue-pack-types';

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
