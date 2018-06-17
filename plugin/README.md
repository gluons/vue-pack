---
sidebar: auto
prev: /configuration/
---

# Plugin

`vue-pack`'s plugin.

```ts
type Plugin = (context: PluginContext) => void;
```

## PluginContext

```ts
interface PluginContext {
	readonly webpackConfigs: PluginConfigGroup;
	readonly config: Configuration;
}
```

### `webpackConfigs`
**Type:** [`PluginConfigGroup`](#pluginconfiggroup)

Group of all [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configurations instance that's created in `vue-pack`.

### `config`
**Type:** [`Configuration`](/configuration/)

`vue-pack`'s configuration.

## PluginConfigGroup

Group of all [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configurations instance.

```ts
interface PluginConfigGroup {
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
