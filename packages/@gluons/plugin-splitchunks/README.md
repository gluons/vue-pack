# vue-pack-splitchunks-plugin
![license](https://img.shields.io/github/license/gluons/vue-pack.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/@gluons/vue-pack-splitchunks-plugin.svg?style=flat-square)](https://www.npmjs.com/package/@gluons/vue-pack-splitchunks-plugin)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)
[![Travis (.com)](https://img.shields.io/travis/com/gluons/vue-pack.svg?style=flat-square)](https://travis-ci.com/gluons/vue-pack)
[![Codacy grade](https://img.shields.io/codacy/grade/98523b5b7cd7435a8c71b296e84522f8.svg?style=flat-square)](https://www.codacy.com/app/gluons/vue-pack)

A [vue-pack](https://github.com/gluons/vue-pack) plugin to customize webpack's [splitChunks](https://webpack.js.org/configuration/optimization/#optimization-splitchunks).

## Installation

Require [vue-pack](https://www.npmjs.com/package/@gluons/vue-pack).

```bash
npm install --save-dev @gluons/vue-pack
# or
yarn add --dev @gluons/vue-pack
```

Then install this plugin.

```bash
npm install --save-dev @gluons/vue-pack-splitchunks-plugin
# or
yarn add --dev @gluons/vue-pack-splitchunks-plugin
```

## Usage

Add this plugin into `vue-pack` config.

**`vue-pack.config.js`**
```js
const splitChunks = require('@gluons/vue-pack-splitchunks-plugin').default;

const options = {
	tapAll(splitChunks) {
		// Do any with `splitChunks`

		return splitChunks;
	},
	tapCJS(splitChunks) {
		// Do any with `splitChunks`

		return splitChunks;
	},
	tapESM(splitChunks) {
		// Do any with `splitChunks`

		return splitChunks;
	},
	tapWeb(splitChunks) {
		// Do any with `splitChunks`

		return splitChunks;
	}
};

module.exports = {
	plugins: [
		splitChunks(options)
	]
};
```
