import Configuration from './Configuration';
import { WebpackChainConfigGroup } from './WebpackChainer';

/**
 * Group of `webpack-chain`'s configs instance for plugin.
 *
 * @alias WebpackChainConfigGroup
 * @export
 */
export type PluginWebpackConfigGroup = WebpackChainConfigGroup;

/**
 * Plugin context.
 *
 * @export
 * @interface PluginContext
 */
export interface PluginContext {
	/**
	 * Group of all `webpack-chain`'s configs
	 *
	 * @type {PluginWebpackConfigGroup}
	 * @readonly
	 * @memberof PluginContext
	 */
	readonly webpackConfigs: PluginWebpackConfigGroup;
	/**
	 * `vue-pack`'s configuration
	 *
	 * @type {Configuration}
	 * @readonly
	 * @memberof PluginContext
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
 * A higher-order function that return `Plugin`.
 *
 * @export
 */
export type PluginFunction<T> = (options?: T) => Plugin;

export default Plugin;
