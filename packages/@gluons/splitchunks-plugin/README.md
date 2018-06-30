# vue-pack-splitchunks-plugin

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
const splitChunks = require('@gluons/vue-pack-splitchunks-plugin');

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
}

module.exports = {
	plugins: [
		splitChunks(options)
	]
};
```
