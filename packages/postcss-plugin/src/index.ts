import { Plugin, PluginContext } from '@gluons/vue-pack';

import updatePostCSSLoaderOptions from './updatePostCSSLoaderOptions';

/**
 * A plugin to allow using your own PostCSS config.
 *
 * @export
 * @param {PostCSSPluginOptions} options Options
 * @returns {Plugin}
 */
export default function PostCSSPlugin(): Plugin {
	return (ctx: PluginContext) => {
		Object.keys(ctx.webpackConfigs).forEach(key => {
			const config = ctx.webpackConfigs[key];

			updatePostCSSLoaderOptions(config);
		});
	};
}

module.exports = PostCSSPlugin;
