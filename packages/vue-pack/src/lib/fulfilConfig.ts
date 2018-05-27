import nvl from 'nvl';

import Configuration from '../interfaces/Configuration';
import defaultConfig from './defaultConfig';

/**
 * Fulfil missing config value with default config.
 *
 * @export
 * @param {Configuration} config Configuration
 * @returns {Configuration}
 */
export default function fulfilConfig(config: Configuration): Configuration {
	Object.keys(defaultConfig).forEach(configName => {
		config[configName] = nvl(config[configName], defaultConfig[configName]);
	});

	return config;
}
