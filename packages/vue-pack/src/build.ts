import AggregateError from 'aggregate-error';
import webpack, { Configuration, Stats } from 'webpack';

/**
 * Build via `webpack`.
 *
 * @export
 * @param {Configuration[]} configs `webpack`'s configurations
 * @returns {Promise<Stats>}
 */
export default function build(configs: Configuration[]): Promise<Stats> {
	return new Promise((resolve, reject) => {
		webpack(configs, (err, stats) => {
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
