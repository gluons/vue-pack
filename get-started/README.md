---
prev: /
next: /configuration/
---

# Get Started

## CLI (Preferred)

Add `vue-pack` command in `package.json`'s `scripts`.

```json{4-5}
{
	"name": "my-vue-library",
	"scripts": {
		"build": "vue-pack",
		"dev": "vue-pack dev"
	},
	"devDependencies": {
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

Then run `build` to bundle your library!

```bash
npm run build
# or
yarn build
```

Or run `dev` to start development server.

```bash
npm run dev
# or
yarn dev
```

<br>

---

After run it, you will get 5 bundled files at `dist` directory.
- `[filename].cjs.js` for CommonJS
- `[filename].es.js` for ES module
- `[filename].ssr.js` for SSR ([Server-Side Rendering](https://vuejs.org/v2/guide/ssr.html))
- `[filename].web.js` for non-minified web
- `[filename].web.min.js` for minified web

## Node API

Bundle your Vue.js library by following code ([TypeScript](https://www.typescriptlang.org/)) .

```ts
import bundle, { Configuration } from '@gluon/vue-pack'

const config: Configuration = {
	entry: './src/index.ts',
	libraryName: 'MyVuePlugin'
};

bundle(config)
	.then(stats => {
		/*
		 * `stats` is webpack's Stats
		 * See https://webpack.js.org/api/node/#stats-object
		 */
		console.log('Bundle succeed.');
	})
	.catch(err => {
		console.error(err);
	});
```
