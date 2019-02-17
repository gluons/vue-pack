import { Selector } from 'testcafe';

/* tslint:disable: no-unused-expression */
fixture`Dev Server`.page`http://localhost:8888`;

test('Hello plugin development page', async t => {
	const title = await Selector('title').textContent;
	const helloExists = await Selector('#hello').exists;
	const content = await Selector('#hello span').textContent;

	await t.expect(title).eql('Hello Plugin');
	await t.expect(helloExists).ok();
	await t.expect(content).eql('Hello, World!');
});
