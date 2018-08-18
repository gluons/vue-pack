# vue-pack-load-config
![license](https://img.shields.io/github/license/gluons/vue-pack.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/@gluons/vue-pack-load-config.svg?style=flat-square)](https://www.npmjs.com/package/@gluons/vue-pack-load-config)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)
[![Travis (.com)](https://img.shields.io/travis/com/gluons/vue-pack.svg?style=flat-square)](https://travis-ci.com/gluons/vue-pack)
[![Codacy grade](https://img.shields.io/codacy/grade/98523b5b7cd7435a8c71b296e84522f8.svg?style=flat-square)](https://www.codacy.com/app/gluons/vue-pack)

A configuration loader for [vue-pack](https://github.com/gluons/vue-pack).

> Using [JoyCon](https://github.com/egoist/joycon) under the hood.

## Installation

```bash
npm install --save-dev @gluons/vue-pack-load-config
# or
yarn add --dev @gluons/vue-pack-load-config
```

## Usage

```ts
import { Configuration } from '@gluons/vue-pack-types';
import loadConfig from '@gluons/vue-pack-load-config';

let config: Configuration;

loadConfig()
	.then(loadedConfig => {
		config = loadedConfig;
	})
	.catch(err => {
		console.error(err);
	});
```

## API

### loadConfig(privilegeConfig, configPath)
**Return:** `Promise<Configuration>`

Lookup and load `vue-pack` configuration from file.

**Configuration files:**
- vue-pack.config.js
- vue-pack.config.json
- vue-pack.config.yaml
- vue-pack.config.yml
- vue-pack.config.ts

#### privilegeConfig
**Type:** `Partial<Configuration> | Configuration`

High priority config to override config from config file.

#### configPath
**Type:** `string`

Path to config file
