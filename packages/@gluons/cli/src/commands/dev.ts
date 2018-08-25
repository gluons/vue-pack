import serve, { DefaultOptions, Options } from '@gluons/vue-pack-dev';
import loadConfig from '@gluons/vue-pack-load-config';
import nvl from 'nvl';
import { Arguments, CommandBuilder } from 'yargs';

import displayError from '../utils/displayError';
import isNonEmptyStr from '../utils/isNonEmptyStr';
import purifyDevOptions from '../utils/purifyDevOptions';
import resolveCwd from '../utils/resolveCwd';

export const command = 'dev';

export const describe = 'Start development server.';

export const builder: CommandBuilder = yargs => {
	return yargs
		.option('entry', {
			type: 'string',
			alias: 'i',
			desc: 'Path to entry file for development.',
			normalize: true
		})
		.option('port', {
			type: 'number',
			alias: 'p',
			desc: 'Port of development server.',
			defaultDescription: JSON.stringify(DefaultOptions.port)
		})
		.option('noOpen', {
			type: 'boolean',
			alias: 'n',
			desc: 'Do not open in browser when server run.',
			defaultDescription: JSON.stringify(!DefaultOptions.open)
		})
		.option('htmlTitle', {
			type: 'string',
			desc: 'Title of development page.',
			defaultDescription: JSON.stringify(DefaultOptions.htmlTitle)
		})
	;
};

export async function handler(argv: Arguments): Promise<void> {
	try {
		const configPath: string = isNonEmptyStr(argv.config) ? argv.config : null;
		const config = await loadConfig(null, configPath);
		const cliOptions = purifyDevOptions(argv);
		const configDevOptions = config.dev;

		const entry = resolveCwd(nvl(cliOptions.entry, configDevOptions.entry));
		const alias = config.alias;
		const define = configDevOptions.define;
		const port = nvl(cliOptions.port, configDevOptions.port);
		const open = nvl<boolean>(!argv.noOpen, configDevOptions.open);
		const htmlTitle = nvl(cliOptions.htmlTitle, configDevOptions.htmlTitle);

		const options: Options = {
			entry,
			alias,
			define,
			port,
			open,
			htmlTitle
		};

		await serve(options);
	} catch (err) {
		displayError(err);
		process.exitCode = 1;
	}
}
