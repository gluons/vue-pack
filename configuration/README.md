---
sidebar: auto
prev: /get-started/
next: /dev-options/
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

## `entry` <Badge type='warn' text='Required'/>
**Type:** `string`

Entry file of your library.

## `libraryName` <Badge type='warn' text='Required'/>
**Type:** `string`

Library name.

## `fileName`
**Type:** `string`

Name of output bundled files (without extension).

::: tip
If it isn't provided, `vue-pack` will generate file name from [`libraryName`](#libraryname) by [slugify](https://github.com/sindresorhus/slugify).
:::

## `outDir`
**Type:** `string`  
**Default:** `dist`

Output directory of bundled files.

## `cleanOutDir`
**Type:** `boolean`  
**Default:** `true`

Clean output directory before bundling.

## `alias`
**Type:** `{ [key: string]: string }`

Alias to path

> See webpack's [`resolve.alias`](https://webpack.js.org/configuration/resolve/#resolve-alias).

::: tip
`vue-pack` provides `@` as alias to your `./src` directory out of the box.
:::

## `define`
**Type:** `{ [key: string]: any }`  
**Default:** `{}`

Define global constants which can be configured at compile time by **webpack**'s [DefinePlugin](https://webpack.js.org/plugins/define-plugin/).

::: tip
Each value in `define` is [stringified](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) by default.
:::

## `externals`
**Type:** [`Externals`](/externals/)  
**Default:** `{ web: { vue: 'Vue' }, module: [nodeExternals()] }`

Configure external dependencies for webpack.

> See webpack's [`externals`](https://webpack.js.org/configuration/externals/).

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

## `dev`
**Type:** [`DevOptions`](/dev-options/)

Options for `vue-pack`'s development server.
