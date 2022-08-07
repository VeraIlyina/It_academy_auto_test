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
    async getBackgroundMainPage(){
        return $(this.backgroundMainPage);

    }
    async selectChangeLightDarkThemeButton(){
        await baseElement.click(this.changeLightDarkThemeButton);
    }
    async selectGitHubButton(){
        await baseElement.click(this.gitHubButton);
    }

}
module.exports = Header;