import resolveCwd from '../../utils/resolveCwd';

/**
 * Infuse webpack's `resolve.alias`.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {Record<string, string>} alias Alias
 */
export default function infuseAliases(config: any, alias: Record<string, string>): void {
	const builtInAlias: Record<string, string> = {
		'vue$': 'vue/dist/vue.esm.js',
		'@': resolveCwd('./src')
	};

	alias = Object.assign({}, builtInAlias, alias);

	Object.keys(alias).forEach(name => {
		const path = alias[name];

		config.resolve.alias.set(name, path);
	});
}
