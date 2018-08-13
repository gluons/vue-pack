#!/usr/bin/env node

import bundle, { Configuration } from '@gluons/vue-pack';
import yargs = require('yargs');

import displayError from './utils/displayError';
import displaySuccess from './utils/displaySuccess';
import loadConfig, { Argv } from './utils/loadConfig';

const vuePackPkg = require('@gluons/vue-pack/package.json');

const argv: Argv = yargs
	.help()
	.version()
	.usage('$0', vuePackPkg.description)
	.alias('help', 'h')
	.alias('version', 'v')
	.option('config', {
		alias: 'c',
		desc: 'Path to config file',
		string: true,
		normalize: true
	})
	.conflicts('config', ['entry', 'libraryName', 'fileName', 'outDir'])
	.option('entry', {
		alias: 'i',
		desc: "Bundle's entry",
		string: true,
		normalize: true
	})
	.option('libraryName', {
		alias: 'l',
		desc: 'Library name',
		string: true
	})
	.option('fileName', {
		alias: 'f',
		desc: 'Output file name (without extension)',
		string: true
	})
	.option('outDir', {
		alias: 'o',
		desc: 'Output directory',
		string: true,
		normalize: true
	})
	.argv
;

(async () => {
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
})();
