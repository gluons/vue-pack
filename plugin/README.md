---
sidebar: auto
prev: /externals/
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

```ts
interface PluginWebpackConfigGroup {
	readonly commonJSConfig;
	readonly esModuleConfig;
	readonly webUnminConfig;
	readonly webMinConfig;
}
```

### `commonJSConfig`
**Type:** [`WebpackChainConfig`](https://github.com/mozilla-neutrino/webpack-chain#config)

Common JS [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configuration instance.

### `esModuleConfig`
**Type:** [`WebpackChainConfig`](https://github.com/mozilla-neutrino/webpack-chain#config)

ES module [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configuration instance.

### `webUnminConfig`
**Type:** [`WebpackChainConfig`](https://github.com/mozilla-neutrino/webpack-chain#config)

Non-minified web [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configuration instance.

### `webMinConfig`
**Type:** [`WebpackChainConfig`](https://github.com/mozilla-neutrino/webpack-chain#config)

Minified web [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configuration instance.
