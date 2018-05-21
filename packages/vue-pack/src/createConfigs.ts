import nvl from 'nvl';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import WebpackBar from 'webpackbar';

import Options from './interfaces/Options';
import createCJSConfig from './lib/createCJSConfig';
import createESMConfig from './lib/createESMConfig';
import createWebConfig from './lib/createWebConfig';

const BarNames: string[] = [
	'CommonJS',
	'ES Module',
	'Web Unminified',
	'Web Minified'
];
const BarColors: string[] = [
	'green',
	'magenta',
	'cyan',
	'yellow'
];

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
	]
		.map((config, i) => merge(config, {
			plugins: [new WebpackBar({
				name: BarNames[i],
				color: BarColors[i]
			})]
		}));
}
