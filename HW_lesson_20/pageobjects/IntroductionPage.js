const BasePage = require('../pageobjects/BasePage');

class IntroductionPage extends BasePage{
    constructor() {
        super()
        this.headerTextIntroductionPage = "//*[@class = 'theme-doc-markdown markdown']//header";
    }


}
module.exports = IntroductionPage;