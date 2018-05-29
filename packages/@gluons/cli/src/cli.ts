#!/usr/bin/env node

import bundle, { Configuration, displayError, displaySuccess } from '@gluons/vue-pack';
import yargs = require('yargs');

import loadConfig, { Argv } from './utils/loadConfig';

const argv: Argv = yargs
	.help()
	.alias('help', 'h')
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

let config: Configuration;

try {
	if (argv.config) {
		config = loadConfig(argv.config as string);
	} else {
		config = loadConfig(argv);
	}

	bundle(config)
		.then(() => {
			displaySuccess();
		})
		.catch(err => {
			displayError(err);
		});
} catch (err) {
	displayError(err);
}
