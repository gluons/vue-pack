import { resolve } from 'path';

import bundle, { displayError, displaySuccess } from '../dist/bundle';

bundle({
	entry: resolve(__dirname, '../test-fixture/src/index.ts'),
	outPath: resolve(__dirname, '../test-fixture/dist'),
	libraryName: 'Hello',
	fileName: 'hello-plugin',
	sourceMap: true
})
	.then(() => {
		displaySuccess();
	})
	.catch(err => {
		displayError(err);
	});
