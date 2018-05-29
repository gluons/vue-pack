import { error as signaleError } from 'signale';

/**
 * Display error.
 *
 * @export
 * @param {Error} error An error.
 */
export default function displayError(error: Error): void {
	signaleError(error);
}
