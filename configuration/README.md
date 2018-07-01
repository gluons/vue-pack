---
sidebar: auto
prev: /get-started/
next: /plugin/
---

# Configuration

`vue-pack` uses [JoyCon](https://github.com/egoist/joycon) to load configuration file.

These is config files that will be loaded in `vue-pack`:
- `vue-pack.config.js`
- `vue-pack.config.json`
- `vue-pack.config.yaml`
- `vue-pack.config.yml`
- `vue-pack.config.ts`

> `.yaml`, `.yml` are loaded by [joycon-yaml-loader](https://github.com/gluons/joycon-yaml-loader)  
   `.ts` is loaded by [joycon-ts-loader](https://github.com/gluons/joycon-ts-loader)

## `entry` <Badge text='Required'/>
**Type:** `string`

Entry file of your library.

## `libraryName` <Badge text='Required'/>
**Type:** `string`  
**Require:** `true`

Library name.

## `fileName`
**Type:** `string`

Name of output bundled files (without extension).

> If it isn't provided, `vue-pack` will generate file name from [`libraryName`](#libraryname) by [slugify](https://github.com/sindresorhus/slugify).

## `outDir`
**Type:** `string`  
**Default:** `dist`

Output directory of bundled files.

## `cleanOutDir`
**Type:** `boolean`  
**Default:** `true`

Clean output directory before bundling.

## `define`
**Type:** `object`  
**Default:** `{}`

Define global constants which can be configured at compile time by **webpack**'s [DefinePlugin](https://webpack.js.org/plugins/define-plugin/).

## `sourceMap`
**Type:** `boolean`  
**Default:** `true`

Enable generating source maps.

## `noProfiler`
**Type:** `boolean`  
**Default:** `false`

Disable [WebpackBar](https://github.com/nuxt/webpackbar)'s profiler.

## `plugins`
**Type:** [`Plugin[]`](/plugin/)

`vue-pack`'s plugins.


<style>
.badge {
	background-color: deeppink !important;
	border-radius: 0 !important;
	vertical-align: middle;
	margin-left: 1em;
	padding: 5px;
}
</style>
