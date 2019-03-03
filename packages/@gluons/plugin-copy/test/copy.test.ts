/// <reference path='./jest-extend.d.ts' />

import { Configuration as VuePackConfig } from '@gluons/vue-pack';
import createConfigs from '@gluons/vue-pack/dist/createConfigs';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { Plugin } from 'webpack';

import CopyPlugin from '../dist';

expect.extend({
	toContainCopyPlugin(received: Plugin[]) {
		const pass = received.some(plugin => plugin instanceof CopyWebpackPlugin);

		if (pass) {
			return {
				message: () =>
					`${JSON.stringify(received)} contains CopyWebpackPlugin`,
				pass: true
			};
		} else {
			return {
				message: () =>
					`expected ${JSON.stringify(
						received
					)} to contain CopyWebpackPlugin`,
				pass: false
			};
		}
	}
});

describe('CopyPlugin', () => {
	it('should add CopyWebpackPlugin in all configs', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			externals: {}, // Prevent destructuring error
			plugins: [CopyPlugin(['somepath/*'])]
		};

		const configs = await createConfigs(vuePackConfig);

		for (const config of configs) {
			expect(config.plugins).toContainCopyPlugin();
		}
	});
});
