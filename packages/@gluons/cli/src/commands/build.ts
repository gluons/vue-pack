import bundle, { Configuration } from '@gluons/vue-pack';
import { Arguments, CommandBuilder } from 'yargs';

import displayError from '../utils/displayError';
import displaySuccess from '../utils/displaySuccess';
import loadConfig from '../utils/loadConfig';

export const command = ['*', 'build'];

export const describe = 'Bundle Vue.js library.';

export const builder: CommandBuilder = yargs => {
	return yargs
		.option('config', {
			type: 'string',
			alias: 'c',
			desc: 'Path to config file.',
			normalize: true
		})
		.conflicts('config', ['entry', 'libraryName', 'fileName', 'outDir'])
		.option('entry', {
			type: 'string',
			alias: 'i',
			desc: "Bundle's entry.",
			normalize: true
		})
		.option('libraryName', {
			type: 'string',
			alias: 'l',
			desc: 'Library name.'
		})
		.option('fileName', {
			type: 'string',
			alias: 'f',
			desc: 'Output file name (without extension).'
		})
		.option('outDir', {
			type: 'string',
			alias: 'o',
			desc: 'Output directory.',
			defaultDescription: './dist',
			normalize: true
		})
	;
};

export async function handler(argv: Arguments): Promise<void> {
	try {
		let config: Configuration;
		if (argv.config) {
			config = await loadConfig(argv.config as string);
		} else {
			config = await loadConfig(argv);
		}

		await bundle(config);
		displaySuccess();
	} catch (err) {
		displayError(err);
		process.exitCode = 1;
	}
}
