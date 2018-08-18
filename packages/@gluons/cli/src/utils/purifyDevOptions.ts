import { DevOptions } from '@gluons/vue-pack-types';
import isNil from 'lodash.isnil';
import omitBy from 'lodash.omitby';
import pick from 'lodash.pick';
import { Arguments } from 'yargs';

/**
 * Purify impure development options from CLI.
 *
 * @export
 * @param {(DevOptions | Arguments)} impureOptions Impure development options
 * @returns {DevOptions}
 */
export default function purifyDevOptions(impureOptions: DevOptions | Arguments): DevOptions {
	const options: DevOptions = omitBy(
		pick(impureOptions, [
			'entry',
			'port',
			'open',
			'htmlTitle'
		]),
		value => isNil(value)
	) as DevOptions;

	return options;
}
