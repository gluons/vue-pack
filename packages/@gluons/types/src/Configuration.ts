import CommonOptions from './CommonOptions';
import DevOptions from './DevOptions';
import Externals from './Externals';
import Plugin from './Plugin';
import WebOptions from './WebOptions';
import WebpackChainer from './WebpackChainer';

/**
 * `vue-pack`'s configuration.
 *
 * @export
 * @interface Configuration
 */
export default interface Configuration {
	/**
	 * Bundle's entry
	 *
	 * @type {string}
	 * @memberof Configuration
	 */
	entry: string;
	/**
	 * Library name
	 *
	 * @type {string}
	 * @memberof Configuration
	 */
	libraryName: string;
	/**
	 * Output file name (without extension)
	 *
	 * @type {string}
	 * @memberof Configuration
	 */
	fileName?: string;
	/**
	 * Output directory
	 *
	 * @type {string}
	 * @default 'dist'
	 * @memberof Configuration
	 */
	outDir?: string;
	/**
	 * Clean output directory before bundling
	 *
	 * @type {boolean}
	 * @default true
	 * @memberof Configuration
	 */
	cleanOutDir?: boolean;
	/**
	 * Alias to path
	 *
	 * @type {Record<string, string>}
	 * @memberof Configuration
	 */
	alias?: Record<string, string>;
	/**
	 * Define global constants which can be configured at compile time
	 *
	 * @type {Record<string, any>}
	 * @default {}
	 * @memberof Configuration
	 */
	define?: Record<string, any>;
	/**
	 * Configure external dependencies for webpack
	 *
	 * @type {Externals}
	 * @default { web: { vue: 'Vue' }, module: [nodeExternals()] }
	 * @memberof Configuration
	 */
	externals?: Externals;
	/**
	 * Enable source map?
	 *
	 * @type {boolean}
	 * @default true
	 * @memberof Configuration
	 */
	sourceMap?: boolean;
	/**
	 * A function that provide all `webpack-chain` instances for customizing webpack configs.
	 *
	 * @type {WebpackChainer}
	 * @memberof Configuration
	 */
	chainWebpack?: WebpackChainer;
	/**
	 * Disable `webpackbar`'s profiler?
	 *
	 * @type {boolean}
	 * @default false
	 * @memberof Configuration
	 */
	noProfiler?: boolean;
	/**
	 * Plugins
	 */
	plugins?: Plugin[];
	/**
	 * Options for `vue-pack-dev`
	 */
	dev?: DevOptions;
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
		alias: config.alias,
		define: config.define,
		externals: config.externals,
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
