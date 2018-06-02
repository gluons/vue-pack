import { Configuration, loadConfig as loadVuePackConfig } from '@gluons/vue-pack';
import { Arguments } from 'yargs';

import purifyConfig from './purifyConfig';

export type Argv = Arguments | Configuration;

/**
 * Load configuration from config file (if exist) and merge with config from CLI options.
 *
 * @export
 * @param {Argv} [cliConfig] Config from CLI options
 * @returns {Configuration}
 */
export default function loadConfig(cliConfig?: Argv): Configuration;
/**
 * Load configuration from given config file.
 *
 * @export
 * @param {string} [configPath] Path to config file
 * @returns {Configuration}
 */
export default function loadConfig(configPath?: string): Configuration; // tslint:disable-line: unified-signatures
export default function loadConfig(cliConfigOrConfigPath?: Argv | string): Configuration {
	let cliConfig: Configuration;
	let configPath: string;
	if (typeof cliConfigOrConfigPath === 'string') {
		configPath = cliConfigOrConfigPath;
	} else {
		cliConfig = purifyConfig(cliConfigOrConfigPath);
	}

	const config = configPath ? loadVuePackConfig(configPath) : loadVuePackConfig(cliConfig);

	return config;
}
