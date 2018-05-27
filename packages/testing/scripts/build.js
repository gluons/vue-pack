const { resolve } = require('path');
const bundle = require('@gluons/vue-pack');
const { displayError, displaySuccess } = bundle;

bundle({
	entry: resolve(__dirname, '../src/index.ts'),
	libraryName: 'Hello',
	fileName: 'hello-plugin'
})
	.then(() => {
		displaySuccess();
	})
	.catch(err => {
		displayError(err);
	});
