import DevOptions from './DevOptions';
import Externals from './Externals';
import Plugin from './Plugin';
import WebpackChainer from './WebpackChainer';

import BaseOptions from './BaseOptions';
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

function pick<T extends object, U extends keyof T>(obj: T, keys: U[]): Required<Pick<T, U>> {
	return keys.reduce<Required<T>>(
		(newObj, key) => {
			if (key in obj) {
				newObj[key] = obj[key];
			}

			return newObj;
		},
		{} as Required<T>
	);
}

export function toBaseOptions(config: Configuration): BaseOptions {
	const baseOptions: BaseOptions = pick(config, [
		'entry',
		'fileName',
		'outDir',
		'alias',
		'define',
		'externals',
		'sourceMap'
	]);

	return baseOptions;
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
	const webOptions: WebOptions = {
		...pick(config, [
			'entry',
			'libraryName',
			'fileName',
			'outDir',
			'alias',
			'define',
			'externals',
			'sourceMap'
		]),
		minimize
	};

	return webOptions;
}
