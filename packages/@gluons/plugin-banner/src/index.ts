import { Plugin, PluginContext } from '@gluons/vue-pack';
import { BannerPlugin as WebpackBannerPlugin } from 'webpack';

/**
 * A `vue-pack` plugin to add banner to bundle via `webpack.BannerPlugin`.
 *
 * @export
 * @param {string} banner Banner
 * @returns {Plugin}
 */
export default function BannerPlugin(banner: string): Plugin {
	return (context: PluginContext) => {
		if (!banner) {
			return;
		}

		const { webpackConfigs } = context;

		Object.keys(webpackConfigs).forEach(key => {
			const config = webpackConfigs[key];

			config.plugin('banner').use(WebpackBannerPlugin, [banner]);
		});
	};
}

module.exports = BannerPlugin;
