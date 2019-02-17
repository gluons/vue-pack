import clipboardy from 'clipboardy';
import moren, { PartialDefaults } from 'moren';
import opn from 'opn';
import webpack, { Configuration } from 'webpack';
import WebpackDevServer, {
	Configuration as DevConfiguration
} from 'webpack-dev-server';

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
 * @returns {Promise<void>}
 */
export default async function serve(options: Options): Promise<void> {
	process.env.NODE_ENV = 'development';

	const finalOptions: Required<Options> = moren(
		options,
		DefaultOptions
	) as Required<Options>;
	const { port, open } = finalOptions;
	const serverUrl = `http://localhost:${port}`;

	const webpackConfig: Configuration = createWebpackConfig(finalOptions);
	const devConfig: DevConfiguration = webpackConfig.devServer;

	WebpackDevServer.addDevServerEntrypoints(webpackConfig, devConfig);

	const compiler = webpack(webpackConfig);
	const server = new WebpackDevServer(compiler, devConfig);

	await new Promise<void>((resolve, reject) => {
		server.listen(port, '127.0.0.1', err => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});

	if (open) {
		await opn(serverUrl);
	} else {
		// Copy server URL to clipboard when `open` is false
		clipboardy.writeSync(serverUrl);
	}
}
