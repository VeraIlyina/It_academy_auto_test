const BasePage = require('../pageobjects/BasePage');

class ContributePage extends BasePage{
    constructor() {
        super()
        this.headerTextContributePage = "//*[@class = 'theme-doc-markdown markdown']//header";
    }


}
module.exports = ContributePage;