import Configuration from './Configuration';

/**
 * Common options.
 */
type CommonOptions = Required<Pick<Configuration, 'entry' | 'fileName' | 'outDir' | 'alias' | 'define' | 'sourceMap'>>;

export default CommonOptions;
