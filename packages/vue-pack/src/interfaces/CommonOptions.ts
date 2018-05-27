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
	 * Output path
	 */
	outPath: string;
	/**
	 * Enable source map?
	 */
	sourceMap: boolean;
}
