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
    async selectButtonGetStarted(){
        await baseElement.click(this.getStartedButton);
    }
    async selectButtonWatchTalks(){
        await baseElement.click(this.watchTalksButton);
    }
    async selectButtonReadTheBook(){
        await baseElement.click(this.readTheBookButton);
    }
    async selectButtonTakeTheCourse(){
        await baseElement.click(this.takeTheCourseButton);
    }
    async selectButtonSupport(){
        await baseElement.click(this.supportButton);
    }
    async selectReactLinkWebsiteOnMainPage(){
        await baseElement.click(this.reactLinkWebsiteOnMainPage);
    }
    async selectAngularLinkWebsiteOnMainPage(){
        await baseElement.click(this.angularLinkWebsiteOnMainPage);
    }
    async selectPolymerLinkWebsiteOnMainPage(){
        await baseElement.click(this.polymerLinkWebsiteOnMainPage);
    }
    async selectVueJsLinkWebsiteOnMainPage(){
        await baseElement.click(this.vueJsLinkWebsiteOnMainPage);
    }

}

module.exports = MainPage;