/**
 * Infuse webpack's output for ES Module.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 */
export default function infuseESMOutput(config: any): void {
	config.output.filename('[name].es.js').libraryTarget('commonjs2');
}
