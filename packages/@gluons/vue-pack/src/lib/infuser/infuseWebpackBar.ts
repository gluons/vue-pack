import WebpackBar from 'webpackbar';

/**
 * Infuse webpackbar plugin.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {{ name: string, color: string }} options Options
 * @param {boolean} profiler Enable profiler
 */
export default function infuseWebpackBar(
	config: any,
	options: { name: string, color: string },
	profiler: boolean
): void {
	const barOptions = Object.assign({}, options, {
		profile: profiler
	});

	config
		.plugin('webpackbar')
			.use(WebpackBar, [barOptions])
	;
}
