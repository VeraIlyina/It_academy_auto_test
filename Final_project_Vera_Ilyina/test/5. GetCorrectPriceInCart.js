const { expect }  = require('chai');
const StartBrowser  = require('../PageObjects/browserConfig');
const SearchComponents = require('../PageObjects/PageComponents/SearchComponents.js');
const SearchResultPage = require('../PageObjects/SearchResultPage');
const ProductPage = require('../PageObjects/ProductPage');
const BaseElements = require('../helpers/BaseElements');
const CartPage = require('../PageObjects/CartPage');

const searchResultPage = new SearchResultPage();
const productPage = new ProductPage();


describe('Testing price in cart', () => {

	let browser;
	let page;
	let searchComponents;
	let baseElements;
	let cartPage;
	let priceNumberFromSearchResultPage;


	before('Start browser', async () => {

		browser = await StartBrowser();
		page = await browser.newPage();
		searchComponents = new SearchComponents(page);
		baseElements = new BaseElements(page);
		cartPage = new CartPage(page);
		await page.goto('https://www.wildberries.by/');
		const context = browser.defaultBrowserContext();
		await context.overridePermissions('https://www.wildberries.by/', ['geolocation']);

	});

	afterEach('Take screenshot on failure', async function () {

		if (this.currentTest.state !== 'passed') {
			await page.screenshot({path: './screenshot/pptr.png'});
		}

	});

	after('Close browser', async function () {

		await browser.close();

	});

	it('15. Product should adding to the cart', async () => {

		await searchComponents.textSearch('ручка', searchResultPage.searchResultTitle, searchResultPage.firstProductOnResultPage);
		let { priceNumber } = await baseElements.extractNumber(page, searchResultPage.costProductOnResultPage);
		priceNumberFromSearchResultPage =  priceNumber;
		await baseElements.click(searchResultPage.firstProductOnResultPage);
		const { nameProduct, extractedText } = await productPage.descriptionAddedProductShouldEqualProductDescriptionInCart(page);
		await expect(nameProduct).to.equal(extractedText);

	});

	it('16. Price in cart should equal price in result page', async () => {

		await baseElements.click(cartPage.newPriceOfProduct);
		const { priceNumber } = await baseElements.extractNumber(page, cartPage.newPriceOfProduct);
		await expect(priceNumber).to.equal(priceNumberFromSearchResultPage);

	});

	it('17. The price should change when adding a product ', async () => {

		await baseElements.click(cartPage.plusOneProduct);
		const { priceNumber } = await baseElements.extractNumber(page, cartPage.newPriceOfProduct);
		await expect(priceNumberFromSearchResultPage * 2).to.equal(priceNumber);

	});

	it('18. Product should remove from cart', async () => {

		await baseElements.click(cartPage.deleteProductFromCart);
		const text = await page.$eval(cartPage.emptyCartHeader, element => element.textContent);
		await expect(text).to.equal('В корзине пока ничего нет');
	});

});
