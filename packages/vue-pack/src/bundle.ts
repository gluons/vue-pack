import del from 'del';
import { join } from 'path';
import { Stats } from 'webpack';

import build from './build';
import createConfigs from './createConfigs';
import fulfilConfig from './lib/fulfilConfig';
import Configuration from './types/Configuration';
import displayError from './utils/displayError';
import displaySuccess from './utils/displaySuccess';

export { Configuration, Stats };
export { displaySuccess, displayError, fulfilConfig };

/**
 * Start bundle library.
 *
 * @export
 * @param {Configuration} config Configuration
 * @returns {Promise<Stats>} Promise of `webpack`'s stats
 */
export default async function bundle(config: Configuration): Promise<Stats> {
	config = fulfilConfig(config);

	// tslint:disable-next-line: no-unused-expression
	config.cleanOutDir && await del(join(config.outDir, '*'));

	const webpackConfigs = createConfigs(config);

	return await build(webpackConfigs);
}
