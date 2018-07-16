/**
 * Configuration parameter error.
 *
 * @export
 * @class ConfigParameterError
 * @extends {Error}
 */
export default class ConfigParameterError extends Error {
	/**
	 * Creates an instance of `ConfigParameterError`.
	 *
	 * @param {string} configName Configuration parameter name
	 * @param {('invalid' | 'missing')} errorType Error type
	 * @memberof ConfigParameterError
	 */
	constructor(configName: string, errorType: 'invalid' | 'missing') {
		const errorMsg = `"${configName}" config is ${errorType}.`;

		super(errorMsg);

		this.name = 'ConfigParameterError';
	}
}
