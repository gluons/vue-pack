import { Selector } from 'testcafe';

fixture('Dev Server')
	.page('http://localhost:8080');

test('Hello plugin development page', async t => {
	const helloExists = await Selector('#hello').exists;
	const content = await Selector('#hello span').textContent;

	await t.expect(helloExists).ok();
	await t.expect(content).eql('Hello, World!');
});
