import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { Plugin } from 'webpack';

export default function getWebpackPlugins(cssFileName: string): Plugin[] {
	return [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: cssFileName
		})
	] as Plugin[];
}
