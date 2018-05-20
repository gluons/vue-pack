import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Module, RuleSetRule } from 'webpack';

import getCSSUse from '../utils/getCSSUse';
import getPostCSSUse from '../utils/getPostCSSUse';

export default function createWebpackModule(minimize: boolean, sourceMap: boolean): Module {
	const rules: RuleSetRule[] = [
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.ts$/,
			loader: 'ts-loader',
			options: { appendTsSuffixTo: [/\.vue$/] }
		},
		{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				getCSSUse(1, minimize, sourceMap),
				getPostCSSUse(sourceMap)
			]
		},
		{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				getCSSUse(2, minimize, sourceMap),
				getPostCSSUse(sourceMap),
				{ loader: 'sass-loader', options: { sourceMap } }
			]
		},
		{
			test: /\.pug$/,
			loader: 'pug-plain-loader'
		}
	];

	return { rules } as Module;
}
