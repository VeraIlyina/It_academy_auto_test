const BasePage = require('../pageobjects/BasePage');

class GettingStartedPage extends BasePage {
    constructor() {
        super()
        this.headerTextGettingStarted = "//*[@class='theme-doc-markdown markdown']//h1";
    }


}
module.exports = GettingStartedPage;