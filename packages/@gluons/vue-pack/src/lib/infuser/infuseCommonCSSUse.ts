import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import getPostCSSConfigPath from '../../utils/getPostCSSConfigPath';

/**
 * Infuse common CSS use.
 *
 * @export
 * @param {any} rule `webpack-chain`'s Rule
 * @param {boolean} sourceMap Enable source map?
 * @param {number} [importLoaders=1] `css-loader`'s `importLoaders`
 * @returns {Promise<void>}
 */
export default async function infuseCommonCSSUse(
	rule: any,
	sourceMap: boolean,
	importLoaders: number = 1
): Promise<void> {
	rule.use('css-extract')
		.loader(MiniCssExtractPlugin.loader)
		.end()
		.use('css')
		.loader('css-loader')
		.options({
			importLoaders,
			sourceMap
		})
		.end()
		.use('postcss')
		.loader('postcss-loader')
		.options({
			postcssOptions: {
				config: await getPostCSSConfigPath()
			},
			sourceMap
		});
}
