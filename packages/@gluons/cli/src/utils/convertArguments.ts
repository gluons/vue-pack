import isNil from 'lodash.isnil';
import omitBy from 'lodash.omitby';
import pick from 'lodash.pick';
import { Arguments } from 'yargs';

/**
 * Convert `yargs`'s arguments to desired type.
 *
 * @export
 * @template T Desired type
 * @template U Properties of desired type
 * @param {Arguments} argv Arguments
 * @param {U[]} [pickedProps] Properties to pick
 * @returns {T}
 */
export default function convertArguments<T extends object, U extends keyof T>(argv: Arguments, pickedProps?: U[]): T {
	if (pickedProps && (pickedProps.length > 0)) {
		return omitBy(
			pick<Arguments>(argv, pickedProps),
			isNil
		) as T;
	}

	const obj: Partial<T> = {};

	for (const key in argv) {
		if ((key !== '$0') && (key !== '_') && argv.hasOwnProperty(key)) {
			obj[key] = argv[key];
		}
	}

	return obj as T;
}
