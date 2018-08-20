import moren, { PartialDefaults } from 'moren';
import { Configuration } from 'webpack';
import webpackServe, { Options as ServeOptions, Result } from 'webpack-serve';

import createWebpackConfig from './createWebpackConfig';

/**
 * `vue-pack-dev`'s Options.
 *
 * @export
 * @interface Options
 */
export interface Options {
	/**
	 * Path to entry file for development
	 */
	entry: string;
	/**
	 * Alias to path
	 */
	alias?: Record<string, string>;
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
	/**
	 * Name of progress bar of WebpackBar
	 */
	webpackBarName?: string;
}

/**
 * Default options.
 */
export const DefaultOptions: PartialDefaults<Options> = {
	port: 8080,
	open: true,
	htmlTitle: 'Vue Library',
	webpackBarName: 'Vue Pack Dev'
};

/**
 * Run development server for `vue-pack` (and `vue-up`).
 *
 * @export
 * @param {Options} options Options
 * @returns {Promise<Result>}
 */
export default function serve(options: Options): Promise<Result> {
	const finalOptions: Required<Options> = moren(options, DefaultOptions) as Required<Options>;
	const { port, open } = finalOptions;

	const webpackConfig: Configuration = createWebpackConfig(finalOptions);
	const serveOptions: ServeOptions = {
		config: webpackConfig,
		devMiddleware: {
			publicPath: '/',
			stats: false
		},
		port,
		open
	};

	return webpackServe({}, serveOptions);
}
