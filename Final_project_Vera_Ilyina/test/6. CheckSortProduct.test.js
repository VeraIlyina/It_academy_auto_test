const { expect }  = require('chai');
const StartBrowser  = require('../PageObjects/browserConfig');
const SearchComponents = require('../PageObjects/PageComponents/SearchComponents.js');
const SearchResultPage = require('../PageObjects/SearchResultPage');

const searchResultPage = new SearchResultPage();


describe('Testing sorting', () => {

	let browser;
	let page;
	let searchComponents;


	before('Start browser', async () => {

		browser = await StartBrowser();
		page = await browser.newPage();
		searchComponents = new SearchComponents(page);
		await page.goto('https://www.wildberries.by/');
		const context = browser.defaultBrowserContext();
		await context.overridePermissions('https://www.wildberries.by/', ['geolocation']);

	});

	afterEach('Take screenshot on failure', async function () {

		if (this.currentTest.state !== 'passed') {
			await page.screenshot({path: './screenshot/ErrorCheckSortProduct.png'});
		}

	});

	after('Close browser', async function () {

		await browser.close();

	});

	it('19. Product should find', async () => {

		await searchComponents.textSearch('дождик', searchResultPage.searchResultTitle);
		const getText = await page.$eval(searchResultPage.firstProductGoodNameOnResultPage, element => element.textContent);
		expect(getText.toLowerCase()).to.contain('дождик');

	});

	it('20. Product should sorting by rating', async () => {

		await page.click('[data-link*=rate]');
		expect(page.url()).to.contain('sort=rate');

	});

	it('21. Product should sorting by price', async () => {

		await page.click('[data-link*=price]');
		expect(page.url()).to.contain('sort=priceup');

	});

	it('22. Product should sorting by sale', async () => {

		await page.click('.sort-item[data-link*=sale]');
		expect(page.url()).to.contain('sort=sale');

	});

});