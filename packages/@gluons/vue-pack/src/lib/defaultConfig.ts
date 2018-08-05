import slugify from '@sindresorhus/slugify';
import { PartialDefaults } from 'moren';
import { resolve } from 'path';

import Configuration from '../types/Configuration';

/**
 * Default config.
 */
const defaultConfig: PartialDefaults<Configuration> = {
	fileName(config: Configuration) {
		// Create file name from library name.
		return slugify(config.libraryName);
	},
	outDir: resolve(process.cwd(), './dist'),
	cleanOutDir: true,
	define: {},
	sourceMap: true,
	noProfiler: false
};

export default defaultConfig;
