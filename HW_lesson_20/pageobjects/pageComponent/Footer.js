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

    async getStartedPageFooterLink(){
        await $(this.startedPageFooterLink).scrollIntoView()
        await baseElement.click(this.startedPageFooterLink);

    }
    async getApiReferenceFooterLink(){
        await $(this.apiReferenceFooterLink).scrollIntoView()
        await baseElement.click(this.apiReferenceFooterLink);
    }

    async getContributeFooterLink(){
        await $(this.contributeFooterLink).scrollIntoView()
        await baseElement.click(this.contributeFooterLink);
    }
    async getHelpFooterLink(){
        await $(this.helpFooterLink).scrollIntoView()
        await baseElement.click(this.helpFooterLink);
    }

}
module.exports = Footer;