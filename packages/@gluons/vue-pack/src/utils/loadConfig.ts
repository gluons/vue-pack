import JoyCon from 'joycon';
import JoyConYAMLLoader from 'joycon-yaml-loader';
import nvl from 'nvl';
import { homedir } from 'os';
import { basename, dirname, resolve } from 'path';

import Configuration from '../types/Configuration';
import fulfilConfig from './fulfilConfig';
import validateConfig from './validateConfig';

const NAME = 'vue-pack';

/**
 * Load configuration from config file and override some config with `privilegeConfig`.
 *
 * @export
 * @param {Configuration} [privilegeConfig] High priority config to override config from config file
 */
export default function loadConfig(privilegeConfig?: Configuration): Configuration;
/**
 * Load configuration from config file.
 *
 * @export
 * @param {string} [configPath] Path to config file
 */
export default function loadConfig(configPath?: string): Configuration; // tslint:disable-line: unified-signatures
export default function loadConfig(privilegeConfigOrConfigPath?: Configuration | string): Configuration {
	let privilegeConfig: Configuration;
	let configPath: string;
	if (typeof privilegeConfigOrConfigPath === 'string') {
		configPath = privilegeConfigOrConfigPath;
	} else {
		privilegeConfig = privilegeConfigOrConfigPath;
	}

	const joycon = new JoyCon({
		files: [
			`${NAME}.config.js`,
			`${NAME}.config.json`,
			`${NAME}.config.yaml`,
			`${NAME}.config.yml`,
			`${NAME}.config.ts`
		],
		stopDir: homedir()
	});

	// TypeScript loader
	try {
		const JoyConTSLoader = require('joycon-ts-loader');
		joycon.addLoader(JoyConTSLoader);
	} catch (err) {}

	// YAML loader
	joycon.addLoader(JoyConYAMLLoader);

	let config: Configuration;
	if (configPath) {
		const configDir = resolve(dirname(configPath));
		const file = basename(configPath);

		let { data } = joycon.loadSync([file], configDir);
		config = nvl(data, {});
	} else {
		let { data } = joycon.loadSync();
		config = nvl(data, {});
	}

	config = privilegeConfig ? Object.assign({}, config, privilegeConfig) : config;

	validateConfig(config);
	config = fulfilConfig(config);

	return config;
}
