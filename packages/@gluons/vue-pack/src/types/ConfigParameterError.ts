export default class ConfigParameterError extends Error {
	constructor(configName: string, errorType: 'invalid' | 'missing') {
		const errorMsg = `"${configName}" config is ${errorType}.`;

		super(errorMsg);

		this.name = 'ConfigParameterError';
	}
}
