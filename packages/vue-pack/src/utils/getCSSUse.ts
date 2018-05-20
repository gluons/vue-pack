import { RuleSetUseItem } from 'webpack';

export default function getCSSUse(importLoaders: number, minimize: boolean, sourceMap: boolean): RuleSetUseItem {
	return {
		loader: 'css-loader',
		options: {
			importLoaders,
			minimize,
			sourceMap
		}
	} as RuleSetUseItem;
}
