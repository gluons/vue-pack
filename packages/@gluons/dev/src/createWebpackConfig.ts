import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import terminalLink from 'terminal-link';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import {
	Configuration,
	DefinePlugin,
	HotModuleReplacementPlugin
} from 'webpack';
import WebpackBar from 'webpackbar';

import { Options } from './';
import getCSSUses from './getCSSUses';

export default function createWebpackConfig(options: Options): Configuration {
	const { entry, alias, define, port, htmlTitle, webpackBarName } = options;

	const builtInAlias: Record<string, string> = {
		'@': resolve(process.cwd(), './src')
	};
	const finalAlias = Object.assign({}, builtInAlias, alias);
	const serverUrl = `http://localhost:${port}`;
	const serverLink = terminalLink(serverUrl, serverUrl, {
		fallback: () => serverUrl
	});

	let stringifiedDefine: Record<string, any> = null;
	if (define && Object.keys(define).length > 0) {
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
					loader: 'vue-loader',
					options: {
						hotReload: true,
						productionMode: false
					}
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
			new HotModuleReplacementPlugin(),
			new WebpackBar({
				name: webpackBarName
			}),
			new FriendlyErrorsWebpackPlugin({
				compilationSuccessInfo: {
					messages: [
						`You development server is running on ${serverLink}`
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
		stats: false,
		devServer: {
			host: 'localhost',
			port,
			hot: true,
			inline: true,
			/*
			 * `open` won't work in Node API. It only works in CLI.
			 * See https://github.com/webpack/webpack-dev-server/issues/311#issuecomment-423873185
			 *
			 * So, disable it and do it myself.
			 */
			open: false,
			stats: false
		}
	};

	return config;
}
