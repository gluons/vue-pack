import CommonOptions from './CommonOptions';

/**
 * Options for creating base config.
 *
 * @export
 * @interface BaseOptions
 * @extends {CommonOptions}
 */
export default interface BaseOptions extends CommonOptions {
	/**
	 * Enable minimization?
	 */
	minimize: boolean;
}
