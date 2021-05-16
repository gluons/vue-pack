import autoprefixer from 'autoprefixer';
import { RuleSetUseItem } from 'webpack';

export default function getCSSUses(importLoaders = 1): RuleSetUseItem[] {
	const cssUses: RuleSetUseItem[] = [
		'vue-style-loader',
		{
			loader: 'css-loader',
			options: {
				importLoaders,
				sourceMap: true
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: [
						autoprefixer({
							overrideBrowserslist: ['extends browserslist-config-vue']
						})
					]
				},
				sourceMap: true
			}
		}
	];

	return cssUses;
}
