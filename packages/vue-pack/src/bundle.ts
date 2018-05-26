import AggregateError from 'aggregate-error';
import clearTerminal from 'cross-clear';
import webpack, { Stats } from 'webpack';

import createConfigs from './createConfigs';
import Configuration from './interfaces/Configuration';
import displayError from './utils/displayError';
import displaySuccess from './utils/displaySuccess';

export { Configuration, Stats };
export { displaySuccess, displayError };

export default function bundle(config: Configuration): Promise<Stats> {
	const webpackConfigs = createConfigs(config);
	const compiler = webpack(webpackConfigs);

	clearTerminal();

	return new Promise((resolve, reject) => {
		compiler.run((err, stats) => {
			clearTerminal();

			if (err) {
				reject(err);
			} else if (stats.hasErrors()) {
				let info = stats.toJson();
				reject(new AggregateError(info.errors));
			} else {
				resolve(stats);
			}
		});
	});
}
