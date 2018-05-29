import slugify from '@sindresorhus/slugify';
import { resolve } from 'path';

import Configuration from '../types/Configuration';

/**
 * Default config.
 */
const defaultConfig = {
	fileName(config: Configuration) {
		// Create file name from library name.
		return slugify(config.libraryName);
	},
	outDir: resolve(process.cwd(), './dist'),
	cleanOutDir: true,
	sourceMap: true
};

export default defaultConfig;
