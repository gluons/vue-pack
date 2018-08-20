import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { Configuration, DefinePlugin } from 'webpack';
import WebpackBar from 'webpackbar';

import getCSSUses from './getCSSUses';

export interface Options {
	entry: string;
	alias: Record<string, string>;
	define: Record<string, any>;
	port: number;
	htmlTitle: string;
	webpackBarName: string;
}

export default function createWebpackConfig(options: Options): Configuration {
	const {
		entry,
		alias,
		define,
		port,
		htmlTitle,
		webpackBarName
	} = options;
	const builtInAlias: Record<string, string> = {
		'@': resolve(process.cwd(), './src')
	};

	const finalAlias = Object.assign({}, builtInAlias, alias);

	let stringifiedDefine: Record<string, any> = null;
	if (define && (Object.keys(define).length > 0)) {
		stringifiedDefine = {};
		Object.keys(define).forEach(key => {
			const value = define[key];
			stringifiedDefine[key] = JSON.stringify(value);
		});
	}

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
			...(stringifiedDefine ? [new DefinePlugin(stringifiedDefine)] : []),
			new WebpackBar({
				name: webpackBarName
			}),
			new FriendlyErrorsWebpackPlugin({
				compilationSuccessInfo: {
					messages: [
						`You development server is running on http://localhost:${port}`
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
