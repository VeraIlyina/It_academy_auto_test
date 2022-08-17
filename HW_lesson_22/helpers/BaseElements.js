class BaseElements {
    constructor(page) {
        this.page = page;
    }
    async waitForSelectorAndClick(selector) {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }
}
module.exports = BaseElements;