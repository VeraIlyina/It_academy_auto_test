const BasePage = require('../pageobjects/BasePage');

class NeedHelpPage extends BasePage{
    constructor() {
        super()
        this.headerTextNeedHelpPage = "//*[@class = 'theme-doc-markdown markdown']//header";
    }
    async getHeaderTextNeedHelpPage() {
        return await $(this.headerTextNeedHelpPage).getText();
    }


}
module.exports = NeedHelpPage;