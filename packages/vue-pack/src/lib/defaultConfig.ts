import { resolve } from 'path';

/**
 * Default config.
 */
export default {
	outDir: resolve(process.cwd(), './dist'),
	cleanOutDir: true,
	sourceMap: true
};
