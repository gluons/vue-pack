/**
 * `vue-up`'s development options.
 *
 * @export
 * @interface DevOptions
 */
export default interface DevOptions {
	/**
	 * Path to entry file for development
	 */
	entry: string;
	/**
	 * Define global constants which can be configured at compile time
	 */
	define?: Record<string, any>;
	/**
	 * Port of development server
	 */
	port?: number;
	/**
	 * Open in browser when server run
	 */
	open?: boolean;
	/**
	 * Title of development page
	 */
	htmlTitle?: string;
}
