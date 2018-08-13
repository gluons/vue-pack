import { Configuration } from '@gluons/vue-pack-types';
import isNil from 'lodash.isnil';
import omitBy from 'lodash.omitby';
import pick from 'lodash.pick';
import { Arguments } from 'yargs';

/**
 * Purify impure config from CLI.
 *
 * @export
 * @param {(Configuration | Arguments)} impureConfig Impure config.
 * @returns {Configuration}
 */
export default function purifyConfig(impureConfig: Configuration | Arguments): Configuration {
	const config: Configuration = omitBy(
		pick(impureConfig, [
			'entry',
			'libraryName',
			'fileName',
			'outDir'
		]),
		value => isNil(value)
	) as Configuration;

	return config;
}
