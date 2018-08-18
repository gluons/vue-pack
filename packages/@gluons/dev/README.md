# vue-pack-dev
![GitHub](https://img.shields.io/github/license/gluons/vue-pack.svg?style=flat-square)
[![NpmVersion](https://img.shields.io/npm/v/@gluons/vue-pack-dev.svg?style=flat-square)](https://www.npmjs.com/package/@gluons/vue-pack-dev)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)
[![Travis (.com)](https://img.shields.io/travis/com/gluons/vue-pack.svg?style=flat-square)](https://travis-ci.com/gluons/vue-pack)
[![Codacy grade](https://img.shields.io/codacy/grade/98523b5b7cd7435a8c71b296e84522f8.svg?style=flat-square)](https://www.codacy.com/app/gluons/vue-pack)

A development server for [vue-pack](https://github.com/gluons/vue-pack) (and [vue-up](https://github.com/gluons/vue-up)).

> Using [webpack-serve](https://github.com/webpack-contrib/webpack-serve) under the hood.

## Installation

```bash
npm install --save-dev @gluons/vue-pack-dev
# or
yarn add --dev @gluons/vue-pack-dev
```

## Usage

```js
const serve = require('@gluons/vue-pack-dev').default;

serve({
	entry: '<path to your entry file>'
})
	.then(result => {
		console.log('Server is running.');
	})
	.catch(err => {
		console.error(err);
	});
```

## Options

### entry
**Type:** `string`  
**Required**

Path to entry file for development.

### port
**Type:** `number`  
**Default:** `8080`

Port of development server.

### open
**Type:** `boolean`  
**Default:** `true`

Open in browser when server run.

### htmlTitle
**Type:** `string`  
**Default:** `Vue Library`

Title of development page.

### webpackBarName
**Type:** `string`  
**Default:** `Vue Pack Dev`

Name of progress bar of [WebpackBar](https://github.com/nuxt/webpackbar).

## API

### serve(options)
**Return:** [`Promise<Result>`](https://github.com/webpack-contrib/webpack-serve#resultapp)

Run development server.

#### options
**Type:** [`Options`](#options)

Options.
