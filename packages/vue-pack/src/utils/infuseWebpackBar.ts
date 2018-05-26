import WebpackBar from 'webpackbar';

/**
 * Infuse webpackbar plugin.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {{ name: string, color: string }} options Options
 */
export default function infuseWebpackBar(config: any, options: { name: string, color: string }): void {
	config
		.plugin('webpackbar')
			.use(WebpackBar, [options])
	;
}
