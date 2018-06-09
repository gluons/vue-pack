import { resolve } from 'path';

import bundle from '../dist/bundle';

const fixturePath = resolve(__dirname, '../test/fixture');

process.chdir(fixturePath);

bundle()
	.then(() => {
		console.log('Test fixture prepared.');
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
