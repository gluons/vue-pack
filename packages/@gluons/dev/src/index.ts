import moren, { PartialDefaults } from 'moren';
import { Configuration } from 'webpack';
import serve, { Options as ServeOptions, Result } from 'webpack-serve';

import createWebpackConfig from './createWebpackConfig';

export interface Options {
	entry: string;
	port?: number;
	open?: boolean;
	htmlTitle?: string;
	webpackBarName?: string;
}

const defaults: PartialDefaults<Options> = {
	port: 8080,
	open: true,
	htmlTitle: 'Vue Library',
	webpackBarName: 'Vue Pack Dev'
};

export default function run(options: Options): Promise<Result> {
	const finalOptions: Required<Options> = moren(options, defaults) as Required<Options>;
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

	return serve({}, serveOptions);
}
