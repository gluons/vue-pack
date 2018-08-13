import loadVuePackConfig from '@gluons/vue-pack-load-config';
import { Configuration } from '@gluons/vue-pack-types';
import { Arguments } from 'yargs';

import purifyConfig from './purifyConfig';

export type Argv = Arguments | Configuration;

/**
 * Load configuration from config file (if exist) and merge with config from CLI options.
 *
 * @export
 * @param {Argv} [cliConfig] Config from CLI options
 * @returns {Promise<Configuration>}
 */
export default async function loadConfig(cliConfig?: Argv): Promise<Configuration>;
/**
 * Load configuration from given config file.
 *
 * @export
 * @param {string} [configPath] Path to config file
 * @returns {Promise<Configuration>}
 */
export default async function loadConfig(configPath?: string): Promise<Configuration>; // tslint:disable-line: unified-signatures
export default async function loadConfig(cliConfigOrConfigPath?: Argv | string): Promise<Configuration> {
	let cliConfig: Configuration;
	let configPath: string;
	if (typeof cliConfigOrConfigPath === 'string') {
		configPath = cliConfigOrConfigPath;
	} else {
		cliConfig = purifyConfig(cliConfigOrConfigPath);
	}

	const config = configPath ? await loadVuePackConfig(null, configPath) : await loadVuePackConfig(cliConfig);

	return config;
}
