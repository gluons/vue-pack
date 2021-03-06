import { Plugin, PluginContext } from '@gluons/vue-pack';

import tapSplitChunks, { TapFunction } from './tapSplitChunks';

export { TapFunction };

/**
 * `SplitChunksPlugin`'s options.
 *
 * @export
 * @interface SplitChunksPluginOptions
 */
export interface SplitChunksPluginOptions {
	/**
	 * A function to tap `splitChunks` in all configs
	 *
	 * @type {TapFunction}
	 * @memberof SplitChunksPluginOptions
	 */
	tapAll?: TapFunction;
	/**
	 * A function to tap `splitChunks` in CommonJS config
	 *
	 * @type {TapFunction}
	 * @memberof SplitChunksPluginOptions
	 */
	tapCJS?: TapFunction;
	/**
	 * A function to tap `splitChunks` in ES module config
	 *
	 * @type {TapFunction}
	 * @memberof SplitChunksPluginOptions
	 */
	tapESM?: TapFunction;
	/**
	 * A function to tap `splitChunks` in SSR config
	 *
	 * @type {TapFunction}
	 * @memberof SplitChunksPluginOptions
	 */
	tapSSR?: TapFunction;
	/**
	 * A function to tap `splitChunks` in web config.
	 *
	 * @type {TapFunction}
	 * @memberof SplitChunksPluginOptions
	 */
	tapWeb?: TapFunction;
}

/**
 * webpack's `splitChunks` customization plugin.
 *
 * @export
 * @param {SplitChunksPluginOptions} [options]
 * @returns {Plugin}
 */
export default function SplitChunksPlugin(
	options?: SplitChunksPluginOptions
): Plugin {
	return (context: PluginContext) => {
		if (!options) {
			return;
		}

		const { webpackConfigs } = context;
		if (typeof options.tapAll === 'function') {
			Object.keys(webpackConfigs).forEach(key => {
				const config = webpackConfigs[key];
				tapSplitChunks(config, options.tapAll);
			});
		}

		typeof options.tapCJS === 'function' &&
			tapSplitChunks(webpackConfigs.commonJSConfig, options.tapCJS);
		typeof options.tapESM === 'function' &&
			tapSplitChunks(webpackConfigs.esModuleConfig, options.tapESM);
		typeof options.tapSSR === 'function' &&
			tapSplitChunks(webpackConfigs.ssrConfig, options.tapSSR);

		if (typeof options.tapWeb === 'function') {
			tapSplitChunks(webpackConfigs.webUnminConfig, options.tapWeb);
			tapSplitChunks(webpackConfigs.webMinConfig, options.tapWeb);
		}
	};
}

module.exports = SplitChunksPlugin;
