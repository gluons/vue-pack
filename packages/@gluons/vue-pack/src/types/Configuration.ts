import CommonOptions from './CommonOptions';
import Plugin from './Plugin';
import WebOptions from './WebOptions';

/**
 * `vue-pack`'s configuration.
 *
 * @export
 * @interface Configuration
 */
export default interface Configuration {
	/**
	 * Bundle's entry
	 */
	entry: string;
	/**
	 * Library name
	 */
	libraryName: string;
	/**
	 * Output file name (without extension)
	 */
	fileName?: string;
	/**
	 * Output directory
	 */
	outDir?: string;
	/**
	 * Clean output directory before bundling
	 */
	cleanOutDir?: boolean;
	/**
	 * Define global constants which can be configured at compile time
	 */
	define?: Record<string, any>;
	/**
	 * Enable source map?
	 */
	sourceMap?: boolean;
	/**
	 * Disable `webpackbar`'s profiler?
	 */
	noProfiler?: boolean;
	/**
	 * Plugins
	 */
	plugins?: Plugin[];
}

/**
 * Convert `Configuration` to `CommonOptions`.
 *
 * @export
 * @param {Configuration} config `vue-pack`'s configuration.
 * @returns {CommonOptions}
 */
export function toCommonOptions(config: Configuration): CommonOptions {
	const commonOptions: CommonOptions = {
		entry: config.entry,
		fileName: config.fileName,
		outDir: config.outDir,
		define: config.define,
		sourceMap: config.sourceMap
	};

	return commonOptions;
}

/**
 * Convert `Configuration` to `WebOptions`.
 *
 * @export
 * @param {Configuration} config `vue-pack`'s configuration.
 * @param {boolean} minimize Enable minimization?
 * @returns {WebOptions}
 */
export function toWebOptions(config: Configuration, minimize: boolean): WebOptions {
	const commonOptions = toCommonOptions(config);
	const webOptions: WebOptions = Object.assign(
		{
			libraryName: config.libraryName,
			minimize
		},
		commonOptions
	);

	return webOptions;
}
