import BaseOptions from './BaseOptions';

/**
 * Options for creating web config.
 *
 * @export
 * @interface WebOptions
 * @extends {BaseOptions}
 */
export default interface WebOptions extends BaseOptions {
	/**
	 * Library name
	 */
	libraryName: string;
}
