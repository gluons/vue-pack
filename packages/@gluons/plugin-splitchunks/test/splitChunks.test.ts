import { Configuration as VuePackConfig } from '@gluons/vue-pack';
import createConfigs from '@gluons/vue-pack/dist/createConfigs';
import { Configuration } from 'webpack';

import SplitChunksPlugin from '../dist';

const tapAll = splitChunks =>
	Object.assign({}, splitChunks, {
		cacheGroups: {
			vendors: {
				test: /vendors1/
			}
		}
	});

const tapCJS = splitChunks =>
	Object.assign({}, splitChunks, {
		cacheGroups: {
			vendors: {
				test: /vendors2/
			}
		}
	});

const tapESM = splitChunks =>
	Object.assign({}, splitChunks, {
		cacheGroups: {
			vendors: {
				test: /vendors3/
			}
		}
	});

const tapSSR = splitChunks =>
	Object.assign({}, splitChunks, {
		cacheGroups: {
			vendors: {
				test: /vendors4/
			}
		}
	});

const tapWeb = splitChunks =>
	Object.assign({}, splitChunks, {
		cacheGroups: {
			vendors: {
				test: /vendors5/
			}
		}
	});

describe('SplitChunksPlugin', () => {
	it('should change `splitChunks` in all configs', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			externals: {}, // Prevent destructuring error
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
				cacheGroups: {
					vendors: {
						test: /vendors1/
					}
				}
			});
		}
	});

	it('should change `splitChunks` in only CommonJS config', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			externals: {}, // Prevent destructuring error
			plugins: [
				SplitChunksPlugin({
					tapCJS
				})
			]
		};

		const configs: Configuration[] = await createConfigs(vuePackConfig);

		for (let i = 0; i < configs.length; i++) {
			// tslint:disable-line: prefer-for-of
			const config = configs[i];

			expect(config.optimization).toHaveProperty('splitChunks');

			if (i === 0) {
				expect(config.optimization.splitChunks).toMatchObject({
					cacheGroups: {
						vendors: {
							test: /vendors2/
						}
					}
				});
			} else {
				expect(config.optimization.splitChunks).not.toMatchObject({
					cacheGroups: {
						vendors: {
							test: /vendors2/
						}
					}
				});
			}
		}
	});

	it('should change `splitChunks` in only ES module config', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			externals: {}, // Prevent destructuring error
			plugins: [
				SplitChunksPlugin({
					tapESM
				})
			]
		};

		const configs: Configuration[] = await createConfigs(vuePackConfig);

		for (let i = 0; i < configs.length; i++) {
			// tslint:disable-line: prefer-for-of
			const config = configs[i];

			expect(config.optimization).toHaveProperty('splitChunks');

			if (i === 1) {
				expect(config.optimization.splitChunks).toMatchObject({
					cacheGroups: {
						vendors: {
							test: /vendors3/
						}
					}
				});
			} else {
				expect(config.optimization.splitChunks).not.toMatchObject({
					cacheGroups: {
						vendors: {
							test: /vendors3/
						}
					}
				});
			}
		}
	});

	it('should change `splitChunks` in only SSR config', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			externals: {}, // Prevent destructuring error
			plugins: [
				SplitChunksPlugin({
					tapSSR
				})
			]
		};

		const configs: Configuration[] = await createConfigs(vuePackConfig);

		for (let i = 0; i < configs.length; i++) {
			// tslint:disable-line: prefer-for-of
			const config = configs[i];

			expect(config.optimization).toHaveProperty('splitChunks');

			if (i === 2) {
				expect(config.optimization.splitChunks).toMatchObject({
					cacheGroups: {
						vendors: {
							test: /vendors4/
						}
					}
				});
			} else {
				expect(config.optimization.splitChunks).not.toMatchObject({
					cacheGroups: {
						vendors: {
							test: /vendors4/
						}
					}
				});
			}
		}
	});

	it('should change `splitChunks` in only web config', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			externals: {}, // Prevent destructuring error
			plugins: [
				SplitChunksPlugin({
					tapWeb
				})
			]
		};

		const configs: Configuration[] = await createConfigs(vuePackConfig);

		for (let i = 0; i < configs.length; i++) {
			// tslint:disable-line: prefer-for-of
			const config = configs[i];

			expect(config.optimization).toHaveProperty('splitChunks');

			if (i === 3 || i === 4) {
				expect(config.optimization.splitChunks).toMatchObject({
					cacheGroups: {
						vendors: {
							test: /vendors5/
						}
					}
				});
			} else {
				expect(config.optimization.splitChunks).not.toMatchObject({
					cacheGroups: {
						vendors: {
							test: /vendors5/
						}
					}
				});
			}
		}
	});
});
