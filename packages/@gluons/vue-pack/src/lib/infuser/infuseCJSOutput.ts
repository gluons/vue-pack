/**
 * Infuse webpack's output for CommonJS.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 */
export default function infuseCJSOutput(config: any): void {
	config.output
		.filename('[name].cjs.js')
		.libraryTarget('commonjs2')
		.libraryExport('default');
}
