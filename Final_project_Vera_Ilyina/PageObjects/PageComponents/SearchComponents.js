class SearchComponents {

	constructor(page) {

		this.page = page;
		this.serchTextBox = '#searchInput';
		this.searchCatalogPhotoButton = '.search-catalog__btn--photo';
		this.uploadPhotoButton = '.upload-photo-btn';
		this.applySearchButton = '#applySearchBtn';

	}

	async textSearch(searchValue, selectorWait) {

		await this.page.click(this.serchTextBox);
		await this.page.type(this.serchTextBox, searchValue);
		await this.page.keyboard.press('Enter');
		await this.page.waitForSelector(selectorWait);
		await this.page.waitForTimeout(1000);

	};

};

module.exports = SearchComponents;