import AggregateError from 'aggregate-error';
import chalk from 'chalk';
import { EOL } from 'os';

import extractMsgFromStack from './extractMsgFromStack';

/**
 * Display error.
 *
 * @export
 * @param {(Error | AggregateError)} error An error.
 */
export default function displayError(error: Error | AggregateError): void {
	const ERROR_TEXT = chalk.reset.inverse.bold.red(' ERROR ');
	const errors = [];

	if (error instanceof AggregateError) {
		const aggregateError: AggregateError = error;

		for (const err of aggregateError) {
			const { msg, stack } = extractMsgFromStack(err);
			const errMsg = chalk.red(msg);
			const errStack = chalk.grey(stack);

			errors.push(`${ERROR_TEXT}${EOL}${errMsg}${EOL}${errStack}`);
		}
	} else {
		const { msg, stack } = extractMsgFromStack(error);
		const errMsg = chalk.red(msg);
		const errStack = chalk.grey(stack);

		errors.push(`${ERROR_TEXT}${EOL}${errMsg}${EOL}${errStack}`);
	}

	const errorStr = errors.join(EOL.repeat(2));
	process.stderr.write(`${errorStr}${EOL}`);
}
