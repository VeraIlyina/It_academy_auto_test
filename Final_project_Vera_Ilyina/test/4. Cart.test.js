const { expect }  = require('chai');
const StartBrowser  = require('../PageObjects/browserConfig');
const SearchComponents = require('../PageObjects/PageComponents/SearchComponents.js');
const SearchResultPage = require('../PageObjects/SearchResultPage');
const ProductPage = require('../PageObjects/ProductPage');
const FilterBlock = require('../PageObjects/PageComponents/FilterBlock');
const BaseElements = require('../helpers/BaseElements');
const CartPage = require('../PageObjects/CartPage');

const searchResultPage = new SearchResultPage();
const filterBlock = new FilterBlock();
const productPage = new ProductPage();


describe('Testing button search Wildberries site', () => {

	let browser;
	let page;
	let searchComponents;
	let baseElements;
	let cartPage;

	before('Start browser', async () => {

		browser = await StartBrowser();
		page = await browser.newPage();
		searchComponents = new SearchComponents(page);
		baseElements = new BaseElements(page);
		cartPage = new CartPage(page);
		await page.goto('https://www.wildberries.by/', { waitUntil: 'networkidle2' });
		const context = browser.defaultBrowserContext();
		await context.overridePermissions('https://www.wildberries.by/', ['geolocation']);

	});

	afterEach('Take screenshot on failure', async function () {

		if (this.currentTest.state !== 'passed') {
			await page.screenshot({path: './screenshot/ErrorCartTest-${this.currentTest.title}.png'});
		}

	});

	after('Close browser', async function () {

		await browser.close();

	});

	it('13. Product should adding to the cart', async () => {

		await searchComponents.textSearch('медведь', searchResultPage.searchResultTitle, searchResultPage.firstProductOnResultPage);
		await baseElements.click(searchResultPage.firstProductOnResultPage, this.productPageHeaderGoodName,);
		const { nameProduct, extractedText } = await productPage.descriptionAddedProductShouldEqualProductDescriptionInCart(page);
		await expect(nameProduct).to.equal(extractedText);

	});

	it('14. Product should remove from cart', async () => {

		await baseElements.click(cartPage.deleteProductFromCart, cartPage.emptyCartHeader);
		const text = await page.$eval(cartPage.emptyCartHeader, element => element.textContent);
		await expect(text).to.equal('В корзине пока ничего нет');

	});

});
