import { resolve } from 'path';
import { RuleSetUseItem } from 'webpack';

export default function getPostCSSUse(sourceMap: boolean): RuleSetUseItem {
	return {
		loader: 'postcss-loader',
		options: {
			config: {
				path: resolve(__dirname, '../../postcss.config.js')
			},
			sourceMap
		}
	} as RuleSetUseItem;
}
