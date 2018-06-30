import { Aliases } from './index';

/**
 * Update `resolve.alias` in webpack config.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {Aliases} aliases Aliases
 */
export default function updateAliases(config: any, aliases: Aliases) {
	Object.keys(aliases).forEach(alias => {
		let path = aliases[alias];

		config.resolve.alias.set(alias, path);
	});
}
