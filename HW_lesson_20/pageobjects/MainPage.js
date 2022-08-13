const BasePage = require('../pageobjects/BasePage');
const BaseElement = require('../helpers/BaseElements');
const baseElement = new BaseElement();

class MainPage extends BasePage {
    constructor() {
        super();
        this.divButtons = '.buttons_pzbO';
        this.getStartedButton = "//*[text() = 'Get Started']";
        this.watchTalksButton = "//*[text() = 'Watch Talks']";
        this.readTheBookButton = "//*[text() = 'Read the Book']";
        this.takeTheCourseButton = "//*[text() = 'Take The Course']";
        this.supportButton = "//*[text() = 'Support']";
        this.reactLinkWebsiteOnMainPage = '.featureContent_FT24 a:first-child[href*="https://reactjs.org/"]';
        this.angularLinkWebsiteOnMainPage = '.featureContent_FT24 a:nth-child(2)[href*="https://angular.io/"]';
        this.polymerLinkWebsiteOnMainPage = '.featureContent_FT24 a:nth-child(3)[href*="https://www.polymer-project.org/"]';
        this.vueJsLinkWebsiteOnMainPage = '.featureContent_FT24 a:nth-child(4)[href*="https://vuejs.org/"]';


    }
    async selectButton(selectorButton){
        await baseElement.click(selectorButton);
    }

}

module.exports = MainPage;