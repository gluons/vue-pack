import AggregateError from 'aggregate-error';
import chalk from 'chalk';
import { EOL } from 'os';

/**
 * Display error.
 *
 * @export
 * @param {(Error | AggregateError)} error An error.
 */
export default function displayError(error: Error | AggregateError): void {
	const ERROR_TEXT = chalk.reset.inverse.bold.red(' Error ');

	if (error instanceof AggregateError) {
		const aggregateError: AggregateError = error;

		for (const err of aggregateError) {
			const errMsg = chalk.red(err.stack);
			process.stderr.write(`${ERROR_TEXT}${EOL}${errMsg}${EOL}`);
		}
	} else {
		const errMsg = chalk.red(error.stack);
		process.stderr.write(`${ERROR_TEXT}${EOL}${errMsg}${EOL}`);
	}
}
