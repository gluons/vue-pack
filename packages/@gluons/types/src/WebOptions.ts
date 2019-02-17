import Configuration from './Configuration';

/**
 * Options for creating web config.
 */
type WebOptions = Required<
	Pick<
		Configuration,
		| 'entry'
		| 'libraryName'
		| 'fileName'
		| 'outDir'
		| 'alias'
		| 'define'
		| 'externals'
		| 'sourceMap'
	>
> & {
	minimize: boolean;
};

export default WebOptions;
