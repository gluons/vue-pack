/**
 * Tap `splitChunks` config.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {(splitChunks: any) => any} tapFunc Tap function
 */
export default function tapSplitChunks(config: any, tapFunc: (splitChunks: any) => any): void {
	let splitChunks = config.optimization.get('splitChunks') || {};
	splitChunks = tapFunc(splitChunks);
	config.optimization.splitChunks(splitChunks);
}
