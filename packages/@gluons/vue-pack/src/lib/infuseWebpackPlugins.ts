import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { DefinePlugin } from 'webpack';

/**
 * Infuse webpack's plugins.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {string} cssFileName CSS file name
 * @param {{ [key: string]: any }} define Define global constants which can be configured at compile time
 */
export default function infuseWebpackPlugins(
	config: any,
	cssFileName: string,
	define: { [key: string]: any }
): void {
	config
		.plugin('vue')
			.use(VueLoaderPlugin)
			.end()
		.plugin('css-extract')
			.use(MiniCssExtractPlugin, [{ filename: cssFileName }])
	;

	// If define isn't empty object, add it with `DefinePlugin`.
	if (define && (Object.keys(define).length > 0)) {
		config
			.plugin('define')
				.use(DefinePlugin, [define])
		;
	}
}
