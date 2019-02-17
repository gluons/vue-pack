/**
 * Infuse webpack's optimization.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {boolean} minimize Enable minimization?
 */
export default function infuseWebpackOptimization(
	config: any,
	minimize: boolean
): void {
	config.optimization.minimize(minimize).splitChunks({
		cacheGroups: {
			styles: {
				name: 'styles',
				test: /\.css$/,
				chunks: 'all',
				enforce: true
			}
		}
	});
}
