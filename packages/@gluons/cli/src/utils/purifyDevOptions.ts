import { DevOptions } from '@gluons/vue-pack-types';
import { Arguments } from 'yargs';

import convertArguments from './convertArguments';

/**
 * Purify impure development options from CLI.
 *
 * @export
 * @param {Arguments} impureOptions Impure development options
 * @returns {DevOptions}
 */
export default function purifyDevOptions(impureOptions: Arguments): DevOptions {
	return convertArguments(impureOptions, ['entry', 'port', 'htmlTitle']);
}
