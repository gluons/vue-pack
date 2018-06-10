import chalk from 'chalk';
import spawn from 'cross-spawn';
import { resolve } from 'path';

const green = chalk.reset.inverse.bold.green;
const red = chalk.reset.inverse.bold.red;

const cliPath = resolve(__dirname, '../dist/cli.js');
const fixturePath = resolve(__dirname, '../test/fixture');

const child = spawn('node', [cliPath], {
	cwd: fixturePath,
	stdio: 'inherit'
});

child.on('exit', code => {
	if (code === 0) {
		console.log(green(' Test fixture prepared. '));
	} else {
		console.log(red(' Fail to prepare test fixture '));
		process.exit(code);
	}
});
child.on('error', err => {
	console.error(`${red('Error')}`, err);
});
