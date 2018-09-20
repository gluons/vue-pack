/// <reference path='./jest-extend.d.ts' />

import { Configuration as VuePackConfig } from '@gluons/vue-pack';
import createConfigs from '@gluons/vue-pack/dist/createConfigs';
import { BannerPlugin as WebpackBannerPlugin, Plugin } from 'webpack';

import BannerPlugin from '../dist';

expect.extend({
	toContainBannerPlugin(received: Plugin[], banner: string) {
		let pass = false;

		for (const plugin of received) {
			if (
				(plugin instanceof WebpackBannerPlugin)
				&&
				(plugin as any).options
				&&
				((plugin as any).options.banner === banner)
			) {
				pass = true;
			}
		}

		if (pass) {
			return {
				message: () => `${JSON.stringify(received)} contains webpack's BannerPlugin with banner "${banner}"`,
				pass: true
			};
		} else {
			return {
				message: () => `expected ${JSON.stringify(received)} to contain webpack's BannerPlugin with banner "${banner}"`,
				pass: false
			};
		}
	}
});

describe('BannerPlugin', () => {
	it(`should add webpack's BannerPlugin in all configs`, async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			externals: {}, // Prevent destructuring error
			plugins: [
				BannerPlugin('Test Banner Plugin')
			]
		};

		const configs = await createConfigs(vuePackConfig);

		for (const config of configs) {
			expect(config.plugins).toContainBannerPlugin('Test Banner Plugin');
		}
	});
});
