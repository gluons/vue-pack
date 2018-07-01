import { Configuration as VuePackConfig } from '@gluons/vue-pack';
import createConfigs from '@gluons/vue-pack/dist/createConfigs';
import { resolve } from 'path';

import AliasPlugin, { Aliases } from '../dist';

const srcPath = resolve(__dirname, '../src');
const aliases: Aliases = {
	'@': srcPath
};

describe('AliasPlugin', () => {
	it('should change `resolve.alias` correctly', async () => {
		const vuePackConfig: VuePackConfig = {
			entry: 'index.ts',
			libraryName: 'Test',
			plugins: [
				AliasPlugin(aliases)
			]
		};

		const configs = await createConfigs(vuePackConfig);

		for (let config of configs) {
			expect(config.resolve).toHaveProperty('alias');
			expect(config.resolve.alias).toHaveProperty('@', srcPath);
		}
	});
});
