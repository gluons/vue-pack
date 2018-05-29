import Configuration from './Configuration';

/**
 * Group of `webpack-chain`'s config instances for plugin.
 *
 * @export
 * @interface PluginConfigGroup
 */
export interface PluginConfigGroup {
	/**
	 * Common JS `webpack-chain`'s config instance
	 */
	readonly commonJSConfig: any;
	/**
	 * ES module `webpack-chain`'s config instance
	 */
	readonly esModuleConfig: any;
	/**
	 * Unminified web `webpack-chain`'s config instance
	 */
	readonly webUnminConfig: any;
	/**
	 * Minified web `webpack-chain`'s config instance
	 */
	readonly webMinConfig: any;
}

/**
 * Plugin context.
 *
 * @export
 * @interface PluginContext
 */
export interface PluginContext {
	/**
	 * Group of all `webpack-chain`'s configs
	 */
	readonly webpackConfigs: PluginConfigGroup;
	/**
	 * `vue-pack`'s configuration
	 */
	readonly config: Configuration;
}

/**
 * A plugin.
 *
 * @param {PluginContext} context Plugin's context
 */
type Plugin = (context: PluginContext) => void;

/**
 * A function that create `Plugin`. (a.k.a. `Plugin` wrapper)
 *
 * @param {any} options Plugin's options
 */
export type PluginFunction = (options?: any) => Plugin;

export default Plugin;
