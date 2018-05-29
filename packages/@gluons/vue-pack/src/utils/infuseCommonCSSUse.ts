import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'path';

/**
 * Infuse common CSS use.
 *
 * @export
 * @param {any} rule `webpack-chain`'s Rule
 * @param {boolean} minimize Minimize CSS?
 * @param {boolean} sourceMap Enable source map?
 * @param {number} [importLoaders=1] `css-loader`'s `importLoaders`
 */
export default function infuseCommonCSSUse(
	rule: any,
	minimize: boolean,
	sourceMap: boolean,
	importLoaders: number = 1
): void {
	rule
		.use('css-extract')
			.loader(MiniCssExtractPlugin.loader)
			.end()
		.use('css')
			.loader('css-loader')
			.options({
				importLoaders,
				minimize,
				sourceMap
			})
			.end()
		.use('postcss')
			.loader('postcss-loader')
			.options({
				config: {
					path: resolve(__dirname, '../../postcss.config.js')
				},
				sourceMap
			})
	;
}
