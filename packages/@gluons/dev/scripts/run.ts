import { resolve } from 'path';

import serve from '../dist';

serve({
	entry: resolve(__dirname, '../test/fixture/index.ts'),
	open: false
})
	.then(() => {
		console.log('Server is running.');
	})
	.catch(err => {
		console.error(err);
	});
