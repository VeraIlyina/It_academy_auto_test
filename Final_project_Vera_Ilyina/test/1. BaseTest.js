const { expect }  = require('chai');
const StartBrowser  = require('../PageObjects/browserConfig');
const SearchComponents = require('../PageObjects/PageComponents/SearchComponents.js');
const SearchResultPage = require('../PageObjects/SearchResultPage');
const CartPage = require('../PageObjects/CartPage');
const ProductPage = require('../PageObjects/ProductPage');
const FilterBlock = require('../PageObjects/PageComponents/FilterBlock');
const BaseElements = require('../helpers/BaseElements');

const searchResultPage = new SearchResultPage();
const cartPage = new CartPage();
const productPage = new ProductPage();
const filterBlock = new FilterBlock();



describe(' Base(smoke) testing', () => {

	let browser;
	let page;
	let searchComponents;
	let baseElements;

	before('Open browser and page',async () => {

		browser = await StartBrowser();
		page = await browser.newPage();
		searchComponents = new SearchComponents(page);
		baseElements = new BaseElements(page);
		await page.goto('https://www.wildberries.by/', { waitUntil: 'networkidle2' });
		const context = browser.defaultBrowserContext();
		await context.overridePermissions('https://www.wildberries.by/', ['geolocation']);

	});

	afterEach('Take screenshot on failure', async function () {

		if (this.currentTest.state !== 'passed') {

			await page.screenshot({path: `./screenshot/ErrorBaseTest-${this.currentTest.title}.png`});

		}

	});

	after('Close browser', async function () {

		await browser.close();

	});

	it('1. Search product should be found', async () => {

		await searchComponents.textSearch('линейка', searchResultPage.searchResultTitle);
		const getText = await page.$eval(searchResultPage.firstProductGoodNameOnResultPage, element => element.textContent);
		expect(getText.toLowerCase()).to.eql('линейка');

	});

	it('2. Filter should be selected', async () => {

		await baseElements.click(filterBlock.filterBrandFirstCheckbox,searchResultPage.firstProductBrandNameOnResultPage);
		const getBrandDescription = await page.$eval(searchResultPage.firstProductBrandNameOnResultPage, element => element.textContent);
		expect(getBrandDescription).to.eql('Brauberg');

	});

	it('3. Product should be clickable', async () => {

		await baseElements.click(searchResultPage.firstProductOnResultPage, productPage.productPageHeader);
		const getText = await page.$eval(productPage.productPageHeader, element => element.textContent);
		expect(getText).to.eql('Brauberg');

	});

	it('4. Product should add in basket', async () => {

		await productPage.addProductInBasketAndGoToBasket(page);
		const getText = await page.$eval(cartPage.basketPageHeader, element => element.textContent);
		expect(getText).to.eql('Корзина');

	});

});