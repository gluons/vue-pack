import loadConfig from '@gluons/vue-pack-load-config';
import {
	ConfigParameterError,
	Configuration,
	DevOptions,
	Plugin,
	PluginContext,
	PluginFunction,
	PluginWebpackConfigGroup
} from '@gluons/vue-pack-types';
import AggregateError from 'aggregate-error';
import del from 'del';
import nvl from 'nvl';
import { join } from 'path';
import { Stats } from 'webpack';

import build from './build';
import createConfigs from './createConfigs';
import fulfilConfig from './utils/fulfilConfig';
import validateConfig from './utils/validateConfig';

export {
	AggregateError,
	ConfigParameterError,
	Configuration,
	DevOptions,
	Plugin,
	PluginContext,
	PluginFunction,
	PluginWebpackConfigGroup,
	Stats
};

/**
 * Start bundle library.
 *
 * @export
 * @param {Configuration} config Configuration
 * @returns {Promise<Stats>} Promise of `webpack`'s stats
 */
export default async function bundle(config?: Configuration): Promise<Stats> {
	// If no config given, try to load config from config file.
	config = nvl(config, await loadConfig());

	validateConfig(config);
	config = fulfilConfig(config);

	// tslint:disable-next-line: no-unused-expression
	config.cleanOutDir && await del(join(config.outDir, '*'));

	const webpackConfigs = await createConfigs(config);

	return await build(webpackConfigs);
}
