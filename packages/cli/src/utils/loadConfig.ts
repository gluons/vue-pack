import { Configuration, fulfilConfig, validateConfig } from '@gluons/vue-pack';
import JoyCon from 'joycon';
import JoyConYAMLLoader from 'joycon-yaml-loader';
import { homedir } from 'os';
import { basename, dirname, resolve } from 'path';
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

	const joycon = new JoyCon({
		files: [
			'vue-pack.config.js',
			'vue-pack.config.json',
			'vue-pack.config.yaml',
			'vue-pack.config.yml'
		],
		stopDir: homedir()
	});
	joycon.addLoader(JoyConYAMLLoader);

	let config: Configuration;
	if (configPath) {
		const configDir = resolve(dirname(configPath));
		const file = basename(configPath);

		const { data } = joycon.loadSync([file], configDir);
		config = data;
	} else {
		const { data } = joycon.loadSync();
		config = cliConfig ? Object.assign({}, data, cliConfig) : data;
	}

	validateConfig(config);
	config = fulfilConfig(config);

	return config;
}
