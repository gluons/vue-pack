import infuseCommonCSSUse from '../utils/infuseCommonCSSUse';

/**
 * Infuse webpack's module.
 *
 * @export
 * @param {any} config `webpack-chain`'s config instance
 * @param {boolean} minimize Minimize CSS?
 * @param {boolean} sourceMap Enable source map?
 * @returns {Promise<void>}
 */
export default async function infuseWebpackModule(
	config: any,
	minimize: boolean,
	sourceMap: boolean
): Promise<void> {
	// Vue
	config.module.rule('vue')
		.test(/\.vue$/)
		.use('vue').loader('vue-loader')
	;

	// TypeScript
	config.module.rule('ts')
		.test(/\.ts$/)
		.use('ts')
			.loader('ts-loader')
			.options({
				compilerOptions: {
					sourceMap: true,
					declaration: true
				},
				appendTsSuffixTo: [/\.vue$/]
			})
	;

	// CSS
	config.module.rule('css').test(/\.css$/);
	await infuseCommonCSSUse(config.module.rule('css'), minimize, sourceMap);

	// SCSS
	config.module.rule('scss').test(/\.scss$/);
	await infuseCommonCSSUse(config.module.rule('scss'), minimize, sourceMap, 2);
	config.module.rule('scss')
		.use('scss')
			.loader('sass-loader')
			.options({ sourceMap })
	;

	// Pug
	config.module.rule('pug')
		.test(/\.pug$/)
		.use('pug').loader('pug-plain-loader')
	;
}
