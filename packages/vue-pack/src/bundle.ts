import AggregateError from 'aggregate-error';
import del from 'del';
import { join } from 'path';
import { Stats } from 'webpack';

import build from './build';
import createConfigs from './createConfigs';
import Configuration from './types/Configuration';
import displayError from './utils/displayError';
import displaySuccess from './utils/displaySuccess';
import fulfilConfig from './utils/fulfilConfig';
import validateConfig from './utils/validateConfig';

export { Configuration, Stats };
export {
	AggregateError,
	displaySuccess,
	displayError,
	fulfilConfig,
	validateConfig
};

/**
 * Start bundle library.
 *
 * @export
 * @param {Configuration} config Configuration
 * @returns {Promise<Stats>} Promise of `webpack`'s stats
 */
export default async function bundle(config: Configuration): Promise<Stats> {
	validateConfig(config);
	config = fulfilConfig(config);

	// tslint:disable-next-line: no-unused-expression
	config.cleanOutDir && await del(join(config.outDir, '*'));

	const webpackConfigs = createConfigs(config);

	return await build(webpackConfigs);
}
