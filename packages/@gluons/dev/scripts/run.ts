import { resolve } from 'path';

import serve from '../dist';

serve({
	entry: resolve(__dirname, '../test/fixture/index.ts')
})
	.then(() => {
		console.log('Server is running.');
	})
	.catch(err => {
		console.error(err);
	});
