import nvl from 'nvl';
import { resolve } from 'path';
import postcssrc from 'postcss-load-config';

const defaultPostCSSConfigPath = resolve(__dirname, '../../postcss.config.js');

/**
 * Get path to PostCSS config file.
 *
 * @export
 * @returns {Promise<string>}
 */
export default async function getPostCSSConfigPath(): Promise<string> {
	try {
		const { file: configPath }: { file: string } = await postcssrc();

		return nvl(configPath, defaultPostCSSConfigPath);
	} catch {
		return defaultPostCSSConfigPath;
	}
}
