import CommonOptions from './CommonOptions';

/**
 * Options for creating base config.
 */
type BaseOptions = CommonOptions & {
	/**
	 * Enable minimization?
	 */
	minimize: boolean
};

export default BaseOptions;
