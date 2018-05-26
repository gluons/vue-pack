import nvl from 'nvl';
import { resolve } from 'path';
import { Configuration } from 'webpack';

import Options from './interfaces/Options';
import createCJSConfig from './lib/createCJSConfig';
import createESMConfig from './lib/createESMConfig';
import createWebConfig from './lib/createWebConfig';
import infuseWebpackBar from './utils/infuseWebpackBar';

const barOptions = [
	{ name: 'CommonJS', color: 'green' },
	{ name: 'ES Module', color: 'magenta' },
	{ name: 'Web Unminified', color: 'cyan' },
	{ name: 'Web Minified', color: 'yellow' }
];

export default function createConfigs(options: Options): Configuration[] {
	options.outPath = nvl(options.outPath, resolve(process.cwd(), './dist'));
	options.sourceMap = nvl(options.sourceMap, true);

	const commonJSConfig = createCJSConfig(options);
	const esModuleConfig = createESMConfig(options);
	const webUnminConfig = createWebConfig(Object.assign({ minimize: false }, options));
	const webMinConfig = createWebConfig(Object.assign({ minimize: true }, options));

	const configs = [
		commonJSConfig,
		esModuleConfig,
		webUnminConfig,
		webMinConfig
	];
	configs.forEach((config, i) => {
		infuseWebpackBar(config, barOptions[i]);
	});

	return configs.map(config => config.toConfig() as Configuration);
}
