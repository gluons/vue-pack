# vue-pack-copy-plugin
![license](https://img.shields.io/github/license/gluons/vue-pack.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/@gluons/vue-pack-copy-plugin.svg?style=flat-square)](https://www.npmjs.com/package/@gluons/vue-pack-copy-plugin)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)
[![Travis (.com)](https://img.shields.io/travis/com/gluons/vue-pack.svg?style=flat-square)](https://travis-ci.com/gluons/vue-pack)
[![Codacy grade](https://img.shields.io/codacy/grade/98523b5b7cd7435a8c71b296e84522f8.svg?style=flat-square)](https://www.codacy.com/app/gluons/vue-pack)
[![Known Vulnerabilities](https://snyk.io/test/github/gluons/vue-pack/badge.svg?targetFile=packages%2F%40gluons%2Fplugin-copy%2Fpackage.json&style=flat-square)](https://snyk.io/test/github/gluons/vue-pack?targetFile=packages%2F%40gluons%2Fplugin-copy%2Fpackage.json)

A [vue-pack](https://github.com/gluons/vue-pack) plugin to copy files or directories to build directory via [Copy Webpack Plugin](https://github.com/webpack-contrib/copy-webpack-plugin).

## Installation

Require [vue-pack](https://www.npmjs.com/package/@gluons/vue-pack).

```bash
npm install --save-dev @gluons/vue-pack
# or
yarn add --dev @gluons/vue-pack
```

Then install this plugin.

```bash
npm install --save-dev @gluons/vue-pack-copy-plugin
# or
yarn add --dev @gluons/vue-pack-copy-plugin
```

## Usage

Add this plugin into `vue-pack` [config](https://gluons.github.io/vue-pack/configuration/).

**`vue-pack.config.js`**
```js
const copy = require('@gluons/vue-pack-copy-plugin');

const patterns = [
	'path/to/source',
	{ from: 'glob/path/*', to: 'dest/path' }
];

module.exports = {
	plugins: [
		copy(patterns)
	]
};
```

Patterns are the same as **Copy Webpack Plugin**'s [Pattern](https://github.com/webpack-contrib/copy-webpack-plugin#patterns).
