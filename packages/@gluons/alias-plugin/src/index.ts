import { Plugin, PluginContext } from '@gluons/vue-pack';

import updateAliases from './updateAliases';

export interface Aliases {
	[alias: string]: string;
}

/**
 * webpack's `resolve.alias` customization plugin.
 *
 * @export
 * @param {Aliases} aliases Aliases
 * @returns {Plugin}
 */
export default function AliasPlugin(aliases: Aliases): Plugin {
	return (context: PluginContext) => {
		if (!aliases) {
			return;
		}

		const { webpackConfigs } = context;

		Object.keys(webpackConfigs).forEach(key => {
			const config = webpackConfigs[key];

			updateAliases(config, aliases);
		});
	};
}
