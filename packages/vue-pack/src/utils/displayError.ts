import { fatal } from 'signale';

export default function displayError(error: Error): void {
	fatal(error);
}
