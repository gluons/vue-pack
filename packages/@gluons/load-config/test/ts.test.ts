import { resolve } from 'path';

import loadConfig from '../dist';
import expectedConfig, { expectedPrivilege } from './meta/expectedConfig';
import privilegeConfig from './meta/privilegeConfig';

const fixturePath = resolve(__dirname, '../fixtures/ts');

process.chdir(fixturePath);

describe('TypeScript config file', () => {
	it('should get the expected config from TypeScript config file', async () => {
		const config = await loadConfig();

		expect(config).toEqual(expectedConfig);
	});
	it('should get the expected config from TypeScript config file with overridden config', async () => {
		const config = await loadConfig(privilegeConfig);

		expect(config).toEqual(expectedPrivilege);
	});
});
