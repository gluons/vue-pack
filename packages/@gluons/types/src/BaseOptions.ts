import Configuration from './Configuration';

/**
 * Options for creating base config.
 */
type BaseOptions = Required<
	Pick<
		Configuration,
		| 'entry'
		| 'fileName'
		| 'outDir'
		| 'alias'
		| 'define'
		| 'externals'
		| 'sourceMap'
	>
>;

export default BaseOptions;
