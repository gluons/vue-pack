import { Plugin, PluginContext } from '@gluons/vue-pack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { IOptions } from 'minimatch';

/*
 * Types are partially taken from `@types/copy-webpack-plugin`.
 * But I've modified some types.
 */

/**
 * Minimatch Glob.
 *
 * @export
 * @interface MinimatchGlob
 * @extends {IOptions}
 */
export interface MinimatchGlob extends IOptions {
	/**
	 * Glob pattern
	 *
	 * @type {string}
	 * @memberof MinimatchGlob
	 */
	glob: string;
}

/**
 * Pattern for `copy-webpack-plugin`.
 *
 * @export
 * @interface Pattern
 */
export interface Pattern {
	/**
	 * Globs of files/directories to copy from
	 *
	 * @type {(string | MinimatchGlob)}
	 * @memberof Pattern
	 */
	from: string | MinimatchGlob;
	/**
	 * Output path of copied files/directories
	 *
	 * @type {string}
	 * @memberof Pattern
	 */
	to?: string;
	/**
	 * Type of `to` option
	 *
	 * @type {('dir' | 'file' | 'template')}
	 * @memberof Pattern
	 */
	toType?: 'dir' | 'file' | 'template';
	/**
	 * Pattern for extracting elements to be used in `to` templates
	 *
	 * @type {RegExp}
	 * @memberof Pattern
	 */
	test?: RegExp;
	/**
	 * Overwrite files if already exist
	 *
	 * @type {boolean}
	 * @default false
	 * @memberof Pattern
	 */
	force?: boolean;
	/**
	 * Globs to ignore for this pattern
	 *
	 * @type {(Array<string | MinimatchGlob>)}
	 * @default []
	 * @memberof Pattern
	 */
	ignore?: Array<string | MinimatchGlob>;
	/**
	 * Function that modify file content before copying
	 *
	 * @type {(content: string, path: string) => string | Promise<string>}
	 * @memberof Pattern
	 */
	transform?: (content: string, path: string) => string | Promise<string>;
	/**
	 * A path that determine how to interpret the `from` path
	 *
	 * @type {string}
	 * @memberof Pattern
	 */
	context?: string;
}

/**
 * A `vue-pack` plugin to copy files or directories to build directory via `copy-webpack-plugin`.
 *
 * @export
 * @param {(Array<string | Pattern>)} patterns `copy-webpack-plugin`'s patterns
 * @returns {Plugin}
 */
export default function CopyPlugin(patterns: Array<string | Pattern>): Plugin {
	return (context: PluginContext) => {
		if (!Array.isArray(patterns) || (patterns.length === 0)) {
			return;
		}

		const { webpackConfigs } = context;

		for (const key in webpackConfigs) {
			if (Object.prototype.hasOwnProperty.call(webpackConfigs, key)) {
				const config = webpackConfigs[key];

				config
					.plugin('copy')
					.use(CopyWebpackPlugin, [patterns]);
			}
		}
	};
}

module.exports = CopyPlugin;
