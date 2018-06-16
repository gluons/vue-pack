---
prev: /
next: /configuration/
---

# Get Started

## Core

Bundle your Vue.js library by following code ([TypeScript](https://www.typescriptlang.org/)) .

```ts
import bundle, { Configuration } from '@gluon/vue-pack'

const config: Configuration = {
	entry: './src/index.ts',
	libraryName: 'MyVuePlugin'
};

bundle(config)
	.then(() => {
		console.log('Bundle succeed.');
	})
	.catch(err => {
		console.error(err);
	});
```

## CLI

Add `vue-pack` command in `package.json`'s `scripts`.

```json{4}
{
	"name": "my-vue-library",
	"scripts": {
		"build": "vue-pack"
	},
	"devDependencies": {
		"@gluons/vue-pack": "*",
		"@gluons/vue-pack-cli": "*"
	}
}
```

Add config file.

**`vue-pack.config.js`**
```js
module.exports = {
	entry: './src/index.ts',
	libraryName: 'MyVuePlugin'
};
```

Then run it!

```bash
npm run build
# or
yarn build
```

<br>

---

After run it, you will get 4 bundled files at `dist` directory.
- `[filename].cjs.js` for CommonJS
- `[filename].es.js` for ES module
- `[filename].web.js` for non-minified web
- `[filename].web.min.js` for minified web
