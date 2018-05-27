import { Configuration } from '@gluons/vue-pack';
import pick from 'lodash.pick';
import { Arguments } from 'yargs';

export default function purifyConfig(impureConfig: Configuration | Arguments): Configuration {
	const config: Configuration = pick(impureConfig, [
		'entry',
		'libraryName',
		'fileName',
		'outDir'
	]);

	return config;
}
