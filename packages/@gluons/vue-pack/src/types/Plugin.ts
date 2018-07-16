import Configuration from './Configuration';

/**
 * Group of `webpack-chain`'s configs instance for plugin.
 *
 * @export
 * @interface PluginWebpackConfigGroup
 */
export interface PluginWebpackConfigGroup {
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
	readonly webpackConfigs: PluginWebpackConfigGroup;
	/**
	 * `vue-pack`'s configuration
	 */
	readonly config: Configuration;
}

/**
 * A plugin.
 *
 * @export
 */
type Plugin = (context: PluginContext) => void;

/**
 * A function that create `Plugin`. (a.k.a. `Plugin` wrapper)
 *
 * @export
 */
export type PluginFunction<T> = (options?: T) => Plugin;

export default Plugin;
