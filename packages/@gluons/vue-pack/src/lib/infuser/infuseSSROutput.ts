/**
 * Infuse webpack's output for SSR.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 */
export default function infuseSSROutput(config: any): void {
	config.output
		.filename('[name].ssr.js')
		.libraryTarget('commonjs2')
	;
}
