import { Configuration, WebpackChainConfigGroup } from '@gluons/vue-pack-types';

/**
 * Execute chain webpack function.
 *
 * @export
 * @param {WebpackChainConfigGroup} webpackConfigs All `webpack-chain`'s configs instance
 * @param {Configuration} config `vue-pack`'s configuration
 */
export default function executeChainWebpack(webpackConfigs: WebpackChainConfigGroup, config: Configuration): void {
	if (typeof config.chainWebpack === 'function') {
		config.chainWebpack(webpackConfigs);
	}
}
