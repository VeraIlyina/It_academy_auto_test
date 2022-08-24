const CartPage = require('../PageObjects/CartPage');
const cartPage = new CartPage();
const SearchResultPage = require('../PageObjects/SearchResultPage');
const searchResultPage = new SearchResultPage();

class ProductPage {

	constructor() {

		this.productPageAddProductInBasketButton = '.product-page__aside-container.j-price-block [data-link="{include orderModel tmpl=orderModel.template}"]';
		this.productPageGoInBasketButton = '.product-page__aside-container.j-price-block [data-link="{include orderModel tmpl=orderModel.template}"]';
		this.productPageHeaderGoodName = '.product-page__header h1';
		this.productPageHeader = '.product-page__header .hide-mobile';
		this.expandDescriprionProductPage = '.collapsible__toggle-wrap button.j-description-btn';
		this.descriptionProduct = '.collapsable__content.j-description .collapsable__text';
		this.productID = '.product-article #productNmId';

	};

	async addProductInBasketAndGoToBasket(page){

		await page.waitForTimeout(1000);
		await page.waitForSelector(this.productPageAddProductInBasketButton);
		await page.click(this.productPageAddProductInBasketButton);
		await page.waitForSelector(this.productPageGoInBasketButton);
		await page.waitForTimeout(1000);
		await page.click(this.productPageGoInBasketButton);
		await page.waitForSelector(cartPage.basketPageHeader);

	};

	async descriptionAddedProductShouldEqualProductDescriptionInCart(page) {

		await this.addProductInBasketAndGoToBasket(page);
		const nameProduct = await page.$eval( this.productPageHeaderGoodName, element => element.textContent);
		await page.waitForTimeout(1000);
		const extractedText = await page.$eval(cartPage.cartGoodName, element => element.textContent);
		return { nameProduct, extractedText };

	};

};

module.exports = ProductPage;