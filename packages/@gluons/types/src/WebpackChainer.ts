/**
 * Group of `webpack-chain`'s configs instance.
 *
 * @export
 * @interface WebpackChainConfigGroup
 */
export interface WebpackChainConfigGroup {
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
 * A function that will receive the group of `webpack-chain` configs instance.
 */
type WebpackChainer = (webpackConfigs: WebpackChainConfigGroup) => void;

export default WebpackChainer;
