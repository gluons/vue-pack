import { Configuration } from '@gluons/vue-pack-types';
import { Arguments } from 'yargs';

import convertArguments from './convertArguments';

/**
 * Purify impure config from CLI.
 *
 * @export
 * @param {Arguments} impureConfig Impure config
 * @returns {Configuration}
 */
export default function purifyConfig(impureConfig: Arguments): Configuration {
	return convertArguments(impureConfig, [
		'entry',
		'libraryName',
		'fileName',
		'outDir'
	]);
}
