class CartPage {
	constructor() {

		this.basketPageHeader = '.basket-section__header-tabs h1';
		this.cartGoodName = '.good-info__good-name';
		this.plusOneProduct = '.count__plus.plus';
		this.newPriceOfProduct = '.list-item__price-new';
		this.totalPriceOfAllProductInBasket = '(//*[@class = \'b-top__total line\'] //span)[2]//span';
		this.deleteProductFromCart = '.btn__del.j-basket-item-del';
		this.emptyCartHeader = '.basket-empty h1';

	};

};

module.exports = CartPage;