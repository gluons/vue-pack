---
sidebar: auto
prev: /dev-options/
next: /plugin/
---

# Externals

`vue-pack`'s external dependencies for webpack.

## `web`
**Type:** [`ExternalsElement | ExternalsElement[]`](https://webpack.js.org/configuration/externals/)  
**Default:** `{ vue: 'Vue' }`

Web's external dependencies.

## `module`
**Type:** [`ExternalsElement | ExternalsElement[]`](https://webpack.js.org/configuration/externals/)  
**Default:** `[nodeExternals()]`

CommonJS & ES Module external dependencies.

::: tip
The default value (`nodeExternals`) is [`webpack-node-externals`](https://github.com/liady/webpack-node-externals)'s function.
:::
