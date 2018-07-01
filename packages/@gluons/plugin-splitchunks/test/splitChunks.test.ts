import { Configuration as VuePackConfig } from '@gluons/vue-pack';
import createConfigs from '@gluons/vue-pack/dist/createConfigs';
import { Configuration } from 'webpack';
import Config from 'webpack-chain';

import SplitChunksPlugin from '../dist';

const tapAll = splitChunks => Object.assign({}, splitChunks.cacheGroups, {
	vendors: {
		test: /vendors1/
	}
});

const tapCJS = splitChunks => Object.assign({}, splitChunks.cacheGroups, {
	vendors: {
		test: /vendors2/
	}
});

const tapESM = splitChunks => Object.assign({}, splitChunks.cacheGroups, {
	vendors: {
		test: /vendors3/
	}
});

const tapWeb = splitChunks => Object.assign({}, splitChunks.cacheGroups, {
	vendors: {
		test: /vendors4/
	}
});

const configForAll = new Config();
const configForCommon = new Config();
const configForESM = new Config();
const configForWeb = new Config();

describe('SplitChunksPlugin', () => {
	it('should change `splitChunks` in all configs', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			plugins: [
				SplitChunksPlugin({
					tapAll
				})
			]
		};

		const configs: Configuration[] = await createConfigs(vuePackConfig);

		for (let config of configs) {
			expect(config.optimization).toHaveProperty('splitChunks');
			expect(config.optimization.splitChunks).toMatchObject({
				vendors: {
					test: /vendors1/
				}
			});
		}
	});

	it('should change `splitChunks` in only CommonJS config', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			plugins: [
				SplitChunksPlugin({
					tapCJS
				})
			]
		};

		const configs: Configuration[] = await createConfigs(vuePackConfig);

		for (let i = 0; i < configs.length; i++) { // tslint:disable-line: prefer-for-of
			const config = configs[i];

			expect(config.optimization).toHaveProperty('splitChunks');

			if (i === 0) {
				expect(config.optimization.splitChunks).toMatchObject({
					vendors: {
						test: /vendors2/
					}
				});
			} else {
				expect(config.optimization.splitChunks).not.toMatchObject({
					vendors: {
						test: /vendors2/
					}
				});
			}
		}
	});

	it('should change `splitChunks` in only ES module config', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			plugins: [
				SplitChunksPlugin({
					tapESM
				})
			]
		};

		const configs: Configuration[] = await createConfigs(vuePackConfig);

		for (let i = 0; i < configs.length; i++) { // tslint:disable-line: prefer-for-of
			const config = configs[i];

			expect(config.optimization).toHaveProperty('splitChunks');

			if (i === 1) {
				expect(config.optimization.splitChunks).toMatchObject({
					vendors: {
						test: /vendors3/
					}
				});
			} else {
				expect(config.optimization.splitChunks).not.toMatchObject({
					vendors: {
						test: /vendors3/
					}
				});
			}
		}
	});

	it('should change `splitChunks` in only web config', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			plugins: [
				SplitChunksPlugin({
					tapWeb
				})
			]
		};

		const configs: Configuration[] = await createConfigs(vuePackConfig);

		for (let i = 0; i < configs.length; i++) { // tslint:disable-line: prefer-for-of
			const config = configs[i];

			expect(config.optimization).toHaveProperty('splitChunks');

			if ((i === 2) || (i === 3)) {
				expect(config.optimization.splitChunks).toMatchObject({
					vendors: {
						test: /vendors4/
					}
				});
			} else {
				expect(config.optimization.splitChunks).not.toMatchObject({
					vendors: {
						test: /vendors4/
					}
				});
			}
		}
	});
});
