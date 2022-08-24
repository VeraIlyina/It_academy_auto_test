const { expect }  = require('chai');
const StartBrowser  = require('../PageObjects/browserConfig');
const SearchComponents = require('../PageObjects/PageComponents/SearchComponents.js');
const SearchResultPage = require('../PageObjects/SearchResultPage');
const BaseElements = require('../helpers/BaseElements');
const ProductPage = require('../PageObjects/ProductPage');

const searchResultPage = new SearchResultPage();
const productPage = new ProductPage();



describe('Testing search field', () => {

	let browser;
	let page;
	let searchComponents;
	let baseElements;

	beforeEach('Start browser', async function () {

		browser = await StartBrowser();
		page = await browser.newPage();
		searchComponents = new SearchComponents(page);
		baseElements = new BaseElements(page);
		await page.goto('https://www.wildberries.by/');
		const context = browser.defaultBrowserContext();
		await context.overridePermissions('https://www.wildberries.by/', ['geolocation']);

	});

	afterEach('Take screenshot on failure', async function () {

		if (this.currentTest.state !== 'passed') {
			await page.screenshot({path: './screenshot/ErrorSearchFieldClickable.png'});
		}
		await browser.close();

	});

	it('11. Button "Search" should find by text', async () => {

		await searchComponents.textSearch('тарелка', searchResultPage.firstProductGoodNameOnResultPage);
		await baseElements.click(searchResultPage.firstProductOnResultPage, productPage.expandDescriprionProductPage);
		await baseElements.click(productPage.expandDescriprionProductPage, productPage.descriptionProduct);
		const text = await page.$eval(productPage.descriptionProduct, element => element.textContent);
		expect(text.toLowerCase()).to.contain('тарелка');

	});

	it('12. Button "Search" should find by article', async () => {

		await searchComponents.textSearch('65100248', productPage.productID);
		const text = await page.$eval(productPage.productID, element => element.textContent);
		expect(text).to.equal('65100248');

	});
});


