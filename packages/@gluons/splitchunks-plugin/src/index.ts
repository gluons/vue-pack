import { Plugin, PluginContext } from '@gluons/vue-pack';

import tapSplitChunks from './tapSplitChunks';

/**
 * `SplitChunksPlugin`'s options.
 *
 * @export
 * @interface SplitChunksPluginOptions
 */
export interface SplitChunksPluginOptions {
	/**
	 * A function to tap `splitChunks` in all configs
	 */
	tapAll?: (splitChunks: any) => any;
	/**
	 * A function to tap `splitChunks` in CommonJS config
	 */
	tapCJS?: (splitChunks: any) => any;
	/**
	 * A function to tap `splitChunks` in ES module config
	 */
	tapESM?: (splitChunks: any) => any;
	/**
	 * A function to tap `splitChunks` in web config.
	 */
	tapWeb?: (splitChunks: any) => any;
}

/**
 * webpack's `splitChunks` customization plugin.
 *
 * @export
 * @param {SplitChunksPluginOptions} [options]
 * @returns {Plugin}
 */
export default function SplitChunksPlugin(options?: SplitChunksPluginOptions): Plugin {
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
		// tslint:disable:no-unused-expression
		(typeof options.tapCJS === 'function') && tapSplitChunks(webpackConfigs.commonJSConfig, options.tapCJS);
		(typeof options.tapESM === 'function') && tapSplitChunks(webpackConfigs.esModuleConfig, options.tapESM);
		// tslint:enable:no-unused-expression
		if (typeof options.tapWeb === 'function') {
			tapSplitChunks(webpackConfigs.webUnminConfig, options.tapWeb);
			tapSplitChunks(webpackConfigs.webMinConfig, options.tapWeb);
		}
	};
}
