import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';

/**
 * Infuse webpack's plugins.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {string} cssFileName CSS file name
 */
export default function infuseWebpackPlugins(config: any, cssFileName: string): void {
	config
		.plugin('vue')
			.use(VueLoaderPlugin)
			.end()
		.plugin('css-extract')
			.use(MiniCssExtractPlugin, [{ filename: cssFileName }])
	;
}
