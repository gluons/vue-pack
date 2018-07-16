import OptimizeCssnanoPlugin from '@intervolga/optimize-cssnano-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { DefinePlugin } from 'webpack';

/**
 * Infuse webpack's plugins.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {string} cssFileName CSS file name
 * @param {boolean} minimizeCSS Minimize CSS?
 * @param {boolean} sourceMap Enable source map?
 * @param {Record<string, any>} define Define global constants which can be configured at compile time
 */
export default function infuseWebpackPlugins(
	config: any,
	cssFileName: string,
	minimizeCSS: boolean,
	sourceMap: boolean,
	define: Record<string, any>
): void {
	config
		.plugin('vue')
			.use(VueLoaderPlugin)
			.end()
		.plugin('css-extract')
			.use(MiniCssExtractPlugin, [{ filename: cssFileName }])
	;

	if (minimizeCSS) {
		config
			.plugin('css-minimize')
				.use(OptimizeCssnanoPlugin, [{ sourceMap }])
		;
	}

	// If define isn't empty object, add it with `DefinePlugin`.
	if (define && (Object.keys(define).length > 0)) {
		let stringifiedDefine: Record<string, string> = {};
		Object.keys(define).forEach(key => {
			const value = define[key];
			stringifiedDefine[key] = JSON.stringify(value);
		});

		config
			.plugin('define')
				.use(DefinePlugin, [stringifiedDefine])
		;
	}
}
