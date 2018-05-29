import pick from 'lodash.pick';

const styleRules = [
	'css',
	'scss'
];

/**
 * Update PostCSS loader options.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 */
export default function updatePostCSSLoaderOptions(config: any) {
	styleRules.forEach(ruleName => {
		config.module.rule(ruleName).use('postcss')
			.tap(options => pick(options, ['sourceMap'])); // Remove every options except `sourceMap`.
	});
}
