import { ExternalsElement } from 'webpack';

/**
 * `vue-pack`'s external dependencies for webpack.
 *
 * @export
 * @interface Externals
 */
export default interface Externals {
	/**
	 * Web's external dependencies
	 *
	 * @type {(ExternalsElement | ExternalsElement[])}
	 * @default { vue: 'Vue' }
	 * @memberof Externals
	 */
	web?: ExternalsElement | ExternalsElement[];
	/**
	 * CommonJS & ES Module external dependencies
	 *
	 * @type {(ExternalsElement | ExternalsElement[])}
	 * @default [nodeExternals()]
	 * @memberof Externals
	 */
	module?: ExternalsElement | ExternalsElement[];
}
