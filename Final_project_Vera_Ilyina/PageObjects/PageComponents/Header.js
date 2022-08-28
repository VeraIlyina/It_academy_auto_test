class Header {

	constructor() {

		this.changeLanguageButton = '.simple-menu__link--country';
		this.changeAddressButton = '.simple-menu__link--address';
		this.freeDeliveryInfoButton = '.simple-menu__item [href*="https://www.wildberries.by/services/besplatnaya-dostavka?desktop=1"]';
		this.sellOnWildberries = '.simple-menu__item [href*="https://seller.wildberries.ru/"]';
		this.textChatButton = '.header__btn-chat';
		this.burgerMenuButton = '.nav-element__burger';
		this.logoWildberries = '.nav-element__logo';
		this.addres = '.navbar-pc__item.j-item-addresses';
		this.signInbutton = '.j-main-login';
		this.cartButton = '.navbar-pc__link.j-wba-header-item[href*="/lk/basket"]';
		this.addressDelivery = '.simple-menu__link--address';
		this.takeFirstAddressInList = '.address-item.j-poo-option[data-id*="15523"]';
		this.selectAddressButton = '.j-btn-select-poo.balloon-content-block-btn';

	}

	async changeDeliveryAddress(page){

		await page.click(this.changeAddressButton);
		await page.waitForSelector(this.takeFirstAddressInList);
		await page.click(this.takeFirstAddressInList);
		await page.waitForSelector(this.selectAddressButton);
		await page.click(this.selectAddressButton);
		await page.waitForTimeout(1000);

	};

};

module.exports = Header;