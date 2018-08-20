import { resolve } from 'path';

import serve from '../dist';

serve({
	entry: resolve(__dirname, '../test/fixture/index.ts'),
	define: {
		TEXT1: 'Hello, World!'
	},
	port: 8888,
	open: false
})
	.then(() => {
		console.log('Server is running.');
	})
	.catch(err => {
		console.error(err);
	});
