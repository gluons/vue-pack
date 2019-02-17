import bundle from '@gluons/vue-pack';
import loadConfig from '@gluons/vue-pack-load-config';
import { Arguments, CommandBuilder } from 'yargs';

import displayError from '../utils/displayError';
import displaySuccess from '../utils/displaySuccess';
import isNonEmptyStr from '../utils/isNonEmptyStr';
import purifyConfig from '../utils/purifyConfig';
import resolveCwd from '../utils/resolveCwd';

export const command = ['*', 'build'];

export const describe = 'Bundle Vue.js library.';

export const builder: CommandBuilder = yargs => {
	return yargs
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
			defaultDescription: JSON.stringify('./dist'),
			normalize: true
		});
};

export async function handler(argv: Arguments): Promise<void> {
	try {
		const configPath: string = isNonEmptyStr(argv.config)
			? (argv.config as string)
			: null;
		const cliConfig = purifyConfig(argv);
		const config = await loadConfig(cliConfig, configPath);

		config.entry = resolveCwd(config.entry);

		await bundle(config);
		displaySuccess();
	} catch (err) {
		displayError(err);
		process.exitCode = 1;
	}
}
