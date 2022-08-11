const BaseElements = require('../../helpers/BaseElements');
let baseElements;

class SearchPage {
    constructor(page) {
        this.page = page;
        baseElements = new BaseElements(page);
        this.SEARCH_BOX = '.navbar__search-input';
    }
    async searchFor(searchValue){
        await baseElements.waitForSelectorAndClick(this.SEARCH_BOX);
        await this.page.type(this.SEARCH_BOX, searchValue, { delay: 100 });
        await this.page.keyboard.press('Enter');
    }
}
module.exports = SearchPage;