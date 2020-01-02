/**
 * @jest-environment node
 */

import { renderToString } from '@vue/server-test-utils';
import { createLocalVue } from '@vue/test-utils';
import cheerio from 'cheerio';

import HelloPlugin from './fixture/dist/hello.ssr';

const localVue = createLocalVue();
localVue.use(HelloPlugin);

const App = localVue.extend({
	template: '<hello></hello>'
});

describe('Hello Plugin', () => {
	it("should get a correct Hello plugin's component", async () => {
		const renderedString = await renderToString(App, {
			localVue
		});
		const $ = cheerio.load(renderedString);

		expect($('#hello span').length).toBeGreaterThan(0);
		expect($('#hello span').text()).toEqual('Hello, World!');
	});
});
