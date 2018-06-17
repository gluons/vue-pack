---
sidebar: auto
prev: /plugin/
---

# Creating a plugin

## Simple plugin

You can create a plugin easily by just export [`Plugin`](/plugin/) function.  
Then do anything that you want with all provided configs in [`context`](/plugin/#context).

```ts
import { Plugin, PluginContext } from '@gluon/vue-pack';

const MyPlugin: Plugin = (context: PluginContext) => {
	const { webpackConfigs, config } = context;
	const {
		commonJSConfig,
		esModuleConfig,
		webUnminConfig,
		webMinConfig
	} = webpackConfigs;

	// Do anything that you want...
};

export = MyPlugin;
```

After that, add your plugin into `vue-pack`'s config.

**`vue-pack.config.js`**
```js{6}
const MyPlugin = require('my-vue-pack-plugin');

module.exports = {
	entry: './src/index.ts',
	libraryName: 'MyVuePlugin',
	plugins: [ MyPlugin ]
};
```

## Configurable plugin

You can create higher-order function which accept options and return [`Plugin`](/plugin/).

```ts
import { Plugin, PluginContext, PluginFunction } from '@gluon/vue-pack';

const MyAwesomePlugin: PluginFunction = (options): Plugin => {
	const { parameter1, parameter2 } = options; // Your plugin's options

	return (context: PluginContext) => {
		const { webpackConfigs, config } = context;
		const {
			commonJSConfig,
			esModuleConfig,
			webUnminConfig,
			webMinConfig
		} = webpackConfigs;

		// Do anything that you want...
	}
}

export = MyAwesomePlugin;
```

After that, add your plugin into `vue-pack`'s config.

**`vue-pack.config.js`**
```js{6-10}
const MyAwesomePlugin = require('my-awesome-vue-pack-plugin');

module.exports = {
	entry: './src/index.ts',
	libraryName: 'MyVuePlugin',
	plugins: [
		MyAwesomePlugin({
			// Options...
		})
	]
};
```
