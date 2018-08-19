import { Configuration } from '@gluons/vue-pack-types';
import slugify from '@sindresorhus/slugify';
import { PartialDefaults } from 'moren';

import resolveCwd from '../utils/resolveCwd';

/**
 * Default config.
 */
const defaultConfig: PartialDefaults<Configuration> = {
	fileName(config: Configuration) {
		// Create file name from library name.
		return slugify(config.libraryName);
	},
	outDir: resolveCwd('./dist'),
	cleanOutDir: true,
	define: {},
	sourceMap: true,
	noProfiler: false
};

export default defaultConfig;
