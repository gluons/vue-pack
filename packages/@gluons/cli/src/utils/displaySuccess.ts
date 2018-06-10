import chalk from 'chalk';
import { EOL } from 'os';

/**
 * Display success message.
 *
 * @export
 */
export default function displaySuccess(): void {
	const SUCCEED_TEXT = chalk.reset.inverse.bold.green(' Bundle succeed. ');
	process.stdout.write(`${SUCCEED_TEXT}${EOL}`);
}
