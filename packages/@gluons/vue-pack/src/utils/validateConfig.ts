import { ConfigParameterError, Configuration } from '@gluons/vue-pack-types';
import AggregateError from 'aggregate-error';

import requiredConfig from '../lib/requiredConfig';

/**
 * Validate `vue-pack`'s configuration.
 *
 * @export
 * @param {Configuration} config `vue-pack`'s configuration
 */
export default function validateConfig(config: Configuration) {
	let errors: Error[] = [];

	requiredConfig.forEach(requiredConfigName => {
		if (!config[requiredConfigName]) {
			errors.push(
				new ConfigParameterError(requiredConfigName, 'missing')
			);
		}
	});

	if (errors.length > 0) {
		throw new AggregateError(errors);
	}
}
