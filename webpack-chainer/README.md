---
sidebar: auto
prev: /externals/
---

# WebpackChainer

A function that will receive the group of [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) configurations instance.

```ts
type WebpackChainer = (webpackConfigs: WebpackChainConfigGroup) => void;
```

### `webpackConfigs`
**Type:** [`WebpackChainConfigGroup`](#webpackchainconfiggroup)

Group of all [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configurations instance that's created in vue-pack.

## WebpackChainConfigGroup

Group of all [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configurations instance.

```ts
interface WebpackChainConfigGroup {
	readonly commonJSConfig;
	readonly esModuleConfig;
	readonly ssrConfig;
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

### `ssrConfig`
**Type:** [`WebpackChainConfig`](https://github.com/mozilla-neutrino/webpack-chain#config)

SSR ([Server-Side Rendering](https://vuejs.org/v2/guide/ssr.html)) [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configuration instance.

### `webUnminConfig`
**Type:** [`WebpackChainConfig`](https://github.com/mozilla-neutrino/webpack-chain#config)

Non-minified web [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configuration instance.

### `webMinConfig`
**Type:** [`WebpackChainConfig`](https://github.com/mozilla-neutrino/webpack-chain#config)

Minified web [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)'s configuration instance.
