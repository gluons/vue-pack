import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { Configuration } from 'webpack';
import WebpackBar from 'webpackbar';

import getCSSUses from './getCSSUses';

export interface Options {
	entry: string;
	alias: Record<string, string>;
	htmlTitle: string;
	webpackBarName: string;
}

export default function createWebpackConfig(options: Options): Configuration {
	const { entry, alias, htmlTitle, webpackBarName } = options;
	const builtInAlias: Record<string, string> = {
		'@': resolve(process.cwd(), './src')
	};

	const finalAlias = Object.assign({}, builtInAlias, alias);

	const config: Configuration = {
		mode: 'development',
		entry,
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.ts$/,
					loader: 'ts-loader',
					options: {
						compilerOptions: {
							sourceMap: true
						},
						appendTsSuffixTo: [/\.vue$/]
					}
				},
				{
					test: /\.css$/,
					use: getCSSUses()
				},
				{
					test: /\.scss$/,
					use: [
						...getCSSUses(2),
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.pug$/,
					oneOf: [
						{
							resourceQuery: /^\?vue/,
							use: ['pug-plain-loader']
						},
						{
							use: ['pug-loader']
						}
					]
				}
			]
		},
		resolve: {
			alias: {
				vue$: 'vue/dist/vue.esm.js',
				...finalAlias
			},
			extensions: ['.wasm', '.mjs', '.vue', '.ts', '.js', '.json']
		},
		plugins: [
			new WebpackBar({
				name: webpackBarName
			}),
			new FriendlyErrorsWebpackPlugin({
				compilationSuccessInfo: {
					messages: [
						'You development server is running on http://localhost:8080'
					]
				}
			}),
			new VueLoaderPlugin(),
			new HtmlWebpackPlugin({
				title: htmlTitle,
				template: resolve(__dirname, '../index.pug')
			})
		],
		devtool: 'eval-source-map',
		stats: false
	};

	return config;
}
