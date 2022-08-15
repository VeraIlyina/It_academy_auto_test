const BasePage = require('../BasePage');
const BaseElement = require('../../helpers/BaseElements');
const baseElement = new BaseElement();

class Header extends BasePage {
    constructor() {
        super();
        this.backgroundMainPage = '.hero--primary';
        this.changeLightDarkThemeButton = '.toggleButton_rCf9';
        this.gitHubButton = '//*[@class=\'navbar__item navbar__link header-github-link\']';

    }
}
module.exports = Header;