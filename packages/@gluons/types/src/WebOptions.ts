import BaseOptions from './BaseOptions';

/**
 * Options for creating web config.
 */
type WebOptions = BaseOptions & {
	/**
	 * Library name
	 */
	libraryName: string
};

export default WebOptions;
