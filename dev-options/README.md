---
sidebar: auto
prev: /configuration/
next: /plugin/
---

# Development Options

Options for `vue-pack`'s development server.


> Using [webpack-serve](https://github.com/webpack-contrib/webpack-serve) under the hood.

::: tip
For **alias**, it'll use [`alias`](/configuration/#alias) from [Configuration](/configuration/).
:::

## `entry` <Badge type='warn' text='Required'/>
**Type:** `string`

Path to entry file for development.

## `define`
**Type:** `{ [key: string]: any }`

Define global constants which can be configured at compile time by **webpack**'s [DefinePlugin](https://webpack.js.org/plugins/define-plugin/).

::: tip
Each value in `define` is [stringified](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) by default.
:::

::: tip
These constants are defined only in development server.  
**It will not be included in production bundle.**
:::

## `port`
**Type:** `number`  
**Default:** `8080`

Port of development server.

## `open`
**Type:** `boolean`  
**Default:** `true`

Open in browser when server run.

## `htmlTitle`
**Type:** `string`  
**Default:** `Vue Library`

Title of development page.
