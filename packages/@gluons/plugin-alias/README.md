# vue-pack-alias-plugin
![license](https://img.shields.io/github/license/gluons/vue-pack.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/@gluons/vue-pack-alias-plugin.svg?style=flat-square)](https://www.npmjs.com/package/@gluons/vue-pack-alias-plugin)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)
[![Travis (.com)](https://img.shields.io/travis/com/gluons/vue-pack.svg?style=flat-square)](https://travis-ci.com/gluons/vue-pack)

A [vue-pack](https://github.com/gluons/vue-pack) plugin to customize webpack's [resolve.alias](https://webpack.js.org/configuration/resolve/#resolve-alias).

## Installation

Require [vue-pack](https://www.npmjs.com/package/@gluons/vue-pack).

```bash
npm install --save-dev @gluons/vue-pack
# or
yarn add --dev @gluons/vue-pack
```

Then install this plugin.

```bash
npm install --save-dev @gluons/vue-pack-alias-plugin
# or
yarn add --dev @gluons/vue-pack-alias-plugin
```

## Usage

Add this plugin into `vue-pack` config.

**`vue-pack.config.js`**
```js
const alias = require('@gluons/vue-pack-alias-plugin').default;

const aliases = {
	'@': './src'
};

module.exports = {
	plugins: [
		alias(aliases)
	]
};
```
