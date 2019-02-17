import { createLocalVue, mount } from '@vue/test-utils';

import HelloPlugin from './fixture/dist/hello.cjs';

const localVue = createLocalVue();
localVue.use(HelloPlugin);

const App = localVue.extend({
	template: '<hello></hello>'
});

describe('Hello Plugin', () => {
	it("should get a correct Hello plugin's component", () => {
		const wrapper = mount(App, {
			localVue
		});

		expect(wrapper.contains('#hello span')).toBe(true);
		expect(wrapper.text()).toEqual('Hello, World!');
	});
});
