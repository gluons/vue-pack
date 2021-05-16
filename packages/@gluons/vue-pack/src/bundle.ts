import loadConfig from '@gluons/vue-pack-load-config';
import { Configuration } from '@gluons/vue-pack-types';
import AggregateError from 'aggregate-error';
import del from 'del';
import nvl from 'nvl';
import { join } from 'path';
import { MultiStats } from 'webpack';
import nodeExternals from 'webpack-node-externals';

import build from './build';
import createConfigs from './createConfigs';
import fulfilConfig from './utils/fulfilConfig';
import validateConfig from './utils/validateConfig';

export * from '@gluons/vue-pack-types';

export { AggregateError, MultiStats, nodeExternals };

/**
 * Start bundle library.
 *
 * @export
 * @param {Configuration} config Configuration
 * @returns {Promise<MultiStats>} Promise of `webpack`'s stats
 */
export default async function bundle(config?: Configuration): Promise<MultiStats> {
	process.env.NODE_ENV = 'production';

	// If no config given, try to load config from config file.
	config = nvl(config, await loadConfig());

	validateConfig(config);
	config = fulfilConfig(config);

	// tslint:disable-next-line: no-unused-expression
	config.cleanOutDir && (await del(join(config.outDir, '*')));

	const webpackConfigs = await createConfigs(config);

	return await build(webpackConfigs);
}
