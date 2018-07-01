/**
 * Common options.
 *
 * @export
 * @interface CommonOptions
 */
export default interface CommonOptions {
	/**
	 * Bundle's entry
	 */
	entry: string;
	/**
	 * Output file name (without extension)
	 */
	fileName: string;
	/**
	 * Output directory
	 */
	outDir: string;
	/**
	 * Define global constants which can be configured at compile time
	 */
	define: { [key: string]: any };
	/**
	 * Enable source map?
	 */
	sourceMap: boolean;
}
