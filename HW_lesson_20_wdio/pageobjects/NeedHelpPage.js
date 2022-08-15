const BasePage = require('../pageobjects/BasePage');

class NeedHelpPage extends BasePage{
    constructor() {
        super()
        this.headerTextNeedHelpPage = "//*[@class = 'theme-doc-markdown markdown']//header";
    }

}
module.exports = NeedHelpPage;