---
sidebar: auto
prev: /dev-options/
next: /creating-plugin/
---

# Plugin

`vue-pack`'s plugin.

```ts
type Plugin = (context: PluginContext) => void;
```

### `context`
**Type:** [`PluginContext`](#plugincontext)

Context of plugin.

## PluginContext

Context of plugin.

```ts
interface PluginContext {
	readonly webpackConfigs: PluginWebpackConfigGroup;
	readonly config: Configuration;
}
```

### `webpackConfigs`
**Type:** [`PluginWebpackConfigGroup`](#pluginwebpackconfiggroup)

Group of all [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configurations instance that's created in `vue-pack`.

### `config`
**Type:** [`Configuration`](/configuration/)

`vue-pack`'s configuration.

## PluginWebpackConfigGroup

Group of all [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configurations instance.

::: tip
`PluginWebpackConfigGroup` is alias of `WebpackChainConfigGroup`.

Please see [`WebpackChainConfigGroup`](/webpack-chainer/#webpackchainconfiggroup) for more information.
:::
