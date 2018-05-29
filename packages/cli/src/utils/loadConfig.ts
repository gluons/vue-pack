import { Configuration, fulfilConfig, validateConfig } from '@gluons/vue-pack';
import JoyCon from 'joycon';
import JoyConYAMLLoader from 'joycon-yaml-loader';
import merge from 'lodash.merge';
import { homedir } from 'os';
import { basename, dirname, resolve } from 'path';
import { Arguments } from 'yargs';

import purifyConfig from './purifyConfig';

export type Argv = Arguments | Configuration;

export default function loadConfig(cliConfig?: Argv): Configuration;
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
		config = cliConfig ? merge({}, data, cliConfig) : data;
	}

	validateConfig(config);
	config = fulfilConfig(config);

	return config;
}
