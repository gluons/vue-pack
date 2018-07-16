import AggregateError from 'aggregate-error';
import del from 'del';
import nvl from 'nvl';
import { join } from 'path';
import { Stats } from 'webpack';

import build from './build';
import createConfigs from './createConfigs';
import ConfigParameterError from './types/ConfigParameterError';
import Configuration from './types/Configuration';
import Plugin from './types/Plugin';
import fulfilConfig from './utils/fulfilConfig';
import loadConfig from './utils/loadConfig';
import validateConfig from './utils/validateConfig';

export {
	AggregateError,
	Configuration,
	ConfigParameterError,
	loadConfig,
	Stats
};
export * from './types/Plugin';
export { Plugin };

/**
 * Start bundle library.
 *
 * @export
 * @param {Configuration} config Configuration
 * @returns {Promise<Stats>} Promise of `webpack`'s stats
 */
export default async function bundle(config?: Configuration): Promise<Stats> {
	// If no config given, try to load config from config file.
	config = nvl(config, loadConfig());

	validateConfig(config);
	config = fulfilConfig(config);

	// tslint:disable-next-line: no-unused-expression
	config.cleanOutDir && await del(join(config.outDir, '*'));

	const webpackConfigs = await createConfigs(config);

	return await build(webpackConfigs);
}
