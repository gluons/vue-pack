import chalk from 'chalk';
import { resolve } from 'path';

import bundle from '../dist/bundle';

const fixturePath = resolve(__dirname, '../test/fixture');

process.chdir(fixturePath);

bundle()
	.then(() => {
		console.log(chalk.reset.inverse.bold.green(' Test fixture prepared. '));
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
