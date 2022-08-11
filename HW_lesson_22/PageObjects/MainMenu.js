// const BaseElement = require('../helpers/BaseElements');
// const baseElement = new BaseElement();

class MainMenu {
    constructor() {
        this.headerTextPuppeteerOnMainPage = '.theme-doc-markdown.markdown h1';
        this.mainMenuPuppeteer = '.theme-doc-sidebar-item-link-level-1 .menu__link--active';
        this.mainMenuFAQ = '.menu__link[href*="/faq"]';
        this.mainMenuTroubleShooting = '.menu__link[href*="/troubleshooting"]';
        this.mainMenuContributing = '.menu__link[href*="/contributing"]';
        this.mainMenuChromiumSupport = '.menu__link[href*="/chromium-support"]';
        this.mainMenuAPI = '.menu__list-item-collapsible .menu__link[href*="/api/"]';

    }
}
module.exports = MainMenu;