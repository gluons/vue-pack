import nvl from 'nvl';

import Configuration from '../interfaces/Configuration';
import defaultConfig from './defaultConfig';

export default function fulfilConfig(config: Configuration) {
	Object.keys(defaultConfig).forEach(configName => {
		config[configName] = nvl(config[configName], defaultConfig[configName]);
	});

	return config;
}
