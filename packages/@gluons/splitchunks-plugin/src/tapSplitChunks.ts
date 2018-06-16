/**
 * Tap function.
 */
export type TapFunction = (splitChunks: any) => any;

/**
 * Tap `splitChunks` config.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {(splitChunks: any) => any} tapFunc Tap function
 */
export default function tapSplitChunks(config: any, tapFunc: TapFunction): void {
	let splitChunks = config.optimization.get('splitChunks') || {};
	splitChunks = tapFunc(splitChunks);
	config.optimization.splitChunks(splitChunks);
}
