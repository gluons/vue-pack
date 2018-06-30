# vue-pack-alias-plugin

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
