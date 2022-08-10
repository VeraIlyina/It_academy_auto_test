const Footer = require('../pageobjects/pageComponent/Footer');
const IntroductionPage = require('../pageobjects/IntroductionPage');
const GettingStartedPage = require('../pageobjects/GettingStartedPage');
const ContributePage = require('../pageobjects/ContributePage');
const NeedHelpPage = require('../pageobjects/NeedHelpPage');


const footer = new Footer();
const gettingStartedPage = new GettingStartedPage();
const introductionPage = new IntroductionPage();
const contributePage = new ContributePage();
const needHelpPage = new NeedHelpPage();



describe(`Testing footer links is clickable`, function() {

    it(`Button 'Get started' on main page should be clickable`, async () => {
        await footer.navigate('https://webdriver.io/');
        await footer.getLinkPage(footer.startedPageFooterLink);
        const getStartedPageText = await $(gettingStartedPage.headerTextGettingStarted).getText();
        expect(getStartedPageText).toEqual('Getting Started');
    });

    it(`Button 'Api Reference' on main page should be clickable`, async () => {
        await footer.navigate('https://webdriver.io/');
        await footer.getLinkPage(footer.apiReferenceFooterLink);
        const getIntroductionPageText = await $(introductionPage.headerTextIntroductionPage).getText();
        expect(getIntroductionPageText).toEqual('Introduction');
    });

    it(`Button 'Contribute' on main page should be clickable`, async () => {
        await footer.navigate('https://webdriver.io/');
        await footer.getLinkPage(footer.contributeFooterLink);
        const getContributePageText = await $(contributePage.headerTextContributePage).getText();
        expect(getContributePageText).toEqual('Contribute');
    });

    it(`Button 'Get started' on main page should be clickable`, async () => {
        await footer.navigate('https://webdriver.io/');
        await footer.getLinkPage(footer.helpFooterLink);
        const getStartedPageText = await $(needHelpPage.headerTextNeedHelpPage).getText();
        expect(getStartedPageText).toEqual('Need Help?');
    });
});