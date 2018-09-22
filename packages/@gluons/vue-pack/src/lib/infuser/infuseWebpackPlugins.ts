import OptimizeCssnanoPlugin from '@intervolga/optimize-cssnano-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { DefinePlugin } from 'webpack';

/**
 * `infuseWebpackPlugins`'s options.
 *
 * @interface Options
 */
interface Options {
	/**
	 * `webpack-chain`'s config instance
	 *
	 * @type {any}
	 * @memberof Options
	 */
	config: any;
	/**
	 * Plain output file name without any extension
	 *
	 * @type {string}
	 * @memberof Options
	 */
	fileName: string;
	/**
	 * Minimize CSS?
	 *
	 * @type {boolean}
	 * @memberof Options
	 */
	minimize: boolean;
	/**
	 * Enable source map?
	 *
	 * @type {boolean}
	 * @memberof Options
	 */
	sourceMap: boolean;
	/**
	 * Define global constants which can be configured at compile time
	 *
	 * @type {Record<string, any>}
	 * @memberof Options
	 */
	define: Record<string, any>;
}

/**
 * Infuse webpack's plugins.
 *
 * @export
 * @param {Options} options Options
 */
export default function infuseWebpackPlugins(options: Options): void {
	const {
		config,
		fileName,
		minimize,
		sourceMap,
		define
	} = options;

	const cssFileName = minimize ? `${fileName}.min.css` : `${fileName}.css`;

	config
		.plugin('vue')
			.use(VueLoaderPlugin)
			.end()
		.plugin('css-extract')
			.use(MiniCssExtractPlugin, [{ filename: cssFileName }])
	;

	if (minimize) {
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
