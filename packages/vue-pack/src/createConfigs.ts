import nvl from 'nvl';
import { resolve } from 'path';
import { Configuration } from 'webpack';

import Options from './interfaces/Options';
import createCJSConfig from './lib/createCJSConfig';
import createESMConfig from './lib/createESMConfig';
import createWebConfig from './lib/createWebConfig';

export default function createConfigs(options: Options): Configuration[] {
	options.outPath = nvl(options.outPath, resolve(process.cwd(), './dist'));
	options.sourceMap = nvl(options.sourceMap, true);

	const commonJSConfig = createCJSConfig(options);
	const esModuleConfig = createESMConfig(options);
	const webUnminConfig = createWebConfig(Object.assign({ minimize: false }, options));
	const webMinConfig = createWebConfig(Object.assign({ minimize: true }, options));

	return [
		commonJSConfig,
		esModuleConfig,
		webUnminConfig,
		webMinConfig
	];
}
