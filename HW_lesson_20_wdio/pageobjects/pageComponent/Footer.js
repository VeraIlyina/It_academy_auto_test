const BasePage = require('../BasePage');
const BaseElement = require('../../helpers/BaseElements');
const baseElement = new BaseElement();

class Footer extends BasePage {
    constructor() {
        super();
        this.startedPageFooterLink = "//*[@class ='footer__item']//a[@href = '/docs/gettingstarted']";
        this.apiReferenceFooterLink = "//*[@class = 'footer__item']//a[@href='/docs/api']";
        this.contributeFooterLink = "//*[@class = 'footer__item']//a[@href='/docs/contribute/']";
        this.helpFooterLink = "//*[@class = 'footer__item']//a[@href='/community/support']";

    }

    async getLinkPage(selector){
        await $(selector).scrollIntoView()
        await baseElement.click(selector);

    }
}
module.exports = Footer;