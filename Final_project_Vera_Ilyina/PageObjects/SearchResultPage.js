class SearchResultPage {

	constructor() {

		this.searchResultTitle = '.searching-results__title';
		this.firstProductOnResultPage = '.product-card[data-card-index="0"]';
		this.secondProductOnResultPage = '.product-card[data-card-index="1"]';
		this.firstProductGoodNameOnResultPage = '.j-good-for-listing-event[data-card-index="0"]  .goods-name';
		this.firstProductBrandNameOnResultPage = '.j-good-for-listing-event[data-card-index="0"]  .brand-name';
		this.costProductOnResultPage = '.product-card[data-card-index="0"]  .lower-price';

	};

};

module.exports = SearchResultPage;