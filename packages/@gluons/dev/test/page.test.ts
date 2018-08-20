import { Selector } from 'testcafe';

fixture('Dev Server')
	.page('http://localhost:8888');

test('App page', async t => {
	const appExists = await Selector('#app').exists;
	const pCount = await Selector('#app p').count;
	const firstPColor = await Selector('#app p:first-child').getStyleProperty('color');
	const lastPColor = await Selector('#app p:last-child').getStyleProperty('color');

	await t.expect(appExists).ok();
	await t.expect(pCount).eql(2);
	await t.expect(firstPColor).eql('rgb(255, 0, 0)');
	await t.expect(lastPColor).eql('rgb(0, 128, 0)');
});
