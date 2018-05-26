import AggregateError from 'aggregate-error';
import clearTerminal from 'cross-clear';
import webpack, { Stats } from 'webpack';

import createConfigs from './createConfigs';
import Options from './interfaces/Options';
import displayError from './utils/displayError';
import displaySuccess from './utils/displaySuccess';

export { Options, Stats };
export { displaySuccess, displayError };

export default function bundle(options: Options): Promise<Stats> {
	const configs = createConfigs(options);
	const compiler = webpack(configs);

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
