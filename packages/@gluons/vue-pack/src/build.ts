import AggregateError from 'aggregate-error';
import webpack, { Configuration, MultiStats } from 'webpack';

/**
 * Build via `webpack`.
 *
 * @export
 * @param {Configuration[]} configs `webpack`'s configurations
 * @returns {Promise<MultiStats>}
 */
export default function build(configs: Configuration[]): Promise<MultiStats> {
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
