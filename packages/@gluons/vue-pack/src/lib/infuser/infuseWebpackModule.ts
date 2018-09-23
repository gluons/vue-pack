import infuseCommonCSSUse from './infuseCommonCSSUse';

/**
 * `infuseWebpackModule`'s options.
 *
 * @interface Options
 */
interface Options {
	/**
	 * `webpack-chain`'s config instance
	 *
	 * @type {any}
	 * @memberof Options
	 */
	config: any;
	/**
	 * Output directory
	 *
	 * @type {string}
	 * @memberof Options
	 */
	outDir: string;
	/**
	 * Enable source map?
	 *
	 * @type {boolean}
	 * @memberof Options
	 */
	sourceMap: boolean;
	/**
	 * Enable SSR (Server-Side Rendering) support?
	 *
	 * @type {boolean}
	 * @memberof Options
	 */
	ssr: boolean;
}

/**
 * Infuse webpack's module.
 *
 * @export
 * @param {Options} options Options
 * @returns {Promise<void>}
 */
export default async function infuseWebpackModule(options: Options): Promise<void> {
	const {
		config,
		outDir,
		sourceMap,
		ssr
	} = options;

	// Vue
	config.module.rule('vue')
		.test(/\.vue$/)
		.use('vue')
			.loader('vue-loader')
			.options({
				hotReload: false,
				productionMode: true,
				optimizeSSR: ssr
			})
	;

	// TypeScript
	config.module.rule('ts')
		.test(/\.ts$/)
		.use('ts')
			.loader('ts-loader')
			.options({
				compilerOptions: {
					outDir,
					sourceMap: true,
					declaration: true
				},
				appendTsSuffixTo: [/\.vue$/]
			})
	;

	// CSS
	config.module.rule('css').test(/\.css$/);
	await infuseCommonCSSUse(config.module.rule('css'), sourceMap);

	// SCSS
	config.module.rule('scss').test(/\.scss$/);
	await infuseCommonCSSUse(config.module.rule('scss'), sourceMap, 2);
	config.module.rule('scss')
		.use('scss')
			.loader('sass-loader')
			.options({ sourceMap })
	;

	// Pug
	config.module.rule('pug')
		.test(/\.pug$/)
		.oneOf('vue')
			.resourceQuery(/^\?vue/)
			.use('pug-plain')
				.loader('pug-plain-loader')
				.end()
			.end()
		.oneOf('pug')
			.use('pug')
				.loader('pug-loader')
	;
}
