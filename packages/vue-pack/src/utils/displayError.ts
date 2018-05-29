import AggregateError from 'aggregate-error';
import { error as signaleError } from 'signale';

/**
 * Display error.
 *
 * @export
 * @param {Error} error An error.
 */
export default function displayError(error: Error | AggregateError): void {
	if (error instanceof AggregateError) {
		const aggregateError: AggregateError = error;

		for (const err of aggregateError) {
			signaleError(err);
		}
	} else {
		signaleError(error);
	}
}
