const BasketPage = require('../PageObjects/BasketPage');
const basketPage = new BasketPage();

class ProductPage {
    constructor() {

            this.productPageAddProductInBasketButton = '.product-page__aside-container.j-price-block [data-link="{include orderModel tmpl=orderModel.template}"]';
            this.productPageGoInBasketButton = '.product-page__aside-container.j-price-block [data-link="{include orderModel tmpl=orderModel.template}"]';
            this.productPageHeader = '.product-page__header .hide-mobile';
            this.changeLanguageOnArmenianMainPage = '.site-list';
            this.locationArmenia = '.header__address';

    }

    async addProductInBasketAndGoToBasket(page){

        await page.waitForSelector(this.productPageAddProductInBasketButton);
        await page.click(this.productPageAddProductInBasketButton);
        await page.waitForTimeout(500)
        await page.click(this.productPageGoInBasketButton);
        await page.waitForSelector(basketPage.basketPageHeader)

    }
}
module.exports = ProductPage;