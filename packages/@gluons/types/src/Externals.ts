import { ValueOf } from 'type-fest';
import { Configuration } from 'webpack';

/**
 * Webpack's `externals`.
 */
type ExternalItem = ValueOf<Configuration, 'externals'>;

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
	 * @type {(ExternalItem | ExternalItem[])}
	 * @default { vue: 'Vue' }
	 * @memberof Externals
	 */
	web?: ExternalItem | ExternalItem[];
	/**
	 * CommonJS & ES Module external dependencies
	 *
	 * @type {(ExternalItem | ExternalItem[])}
	 * @default [nodeExternals()]
	 * @memberof Externals
	 */
	module?: ExternalItem | ExternalItem[];
}
