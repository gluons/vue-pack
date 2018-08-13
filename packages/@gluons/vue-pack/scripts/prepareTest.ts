import chalk from 'chalk';
import { resolve } from 'path';

import bundle from '../dist/bundle';

const green = chalk.reset.inverse.bold.green;
const red = chalk.reset.inverse.bold.red;

const fixturePath = resolve(__dirname, '../test/fixture');

process.chdir(fixturePath);

bundle()
	.then(() => {
		console.log(green(' Test fixture prepared. '));
	})
	.catch(err => {
		console.error(`${red(' Error ')}`, err);
		process.exit(1);
	});
