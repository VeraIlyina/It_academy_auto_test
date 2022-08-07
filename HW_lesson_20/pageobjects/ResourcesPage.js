const BasePage = require('../pageobjects/BasePage');

class ResourcesPage extends BasePage{
    constructor() {
        super()
        this.headerTextResources = "//*[@class='theme-doc-markdown markdown']//h1";
    }
    async getHeaderTextResources() {
        return await $(this.headerTextResources).getText();
    }


}
module.exports = ResourcesPage;