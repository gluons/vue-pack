import { resolve } from 'path';

/**
 * Default config.
 */
export default {
	outPath: resolve(process.cwd(), './dist'),
	cleanOutDir: true,
	sourceMap: true
};
