const BasePage = require('../BasePage');
const BaseElements = require('../../helpers/BaseElements');
const baseElements = new BaseElements();

class SearchComponent extends BasePage {
    constructor() {
        super();
        this.searchField = '.DocSearch.DocSearch-Button';
        this.docSearchField = "//*[@class='DocSearch-Input']";
        this.docSearchDropdownItem0 = "//*[@id='docsearch-item-0']";
        this.docSearchDropdownItem1 = "//*[@id='docsearch-item-1']";
        this.docSearchDropdownItem2 = "//*[@id='docsearch-item-2']";
    }

}
module.exports = SearchComponent;