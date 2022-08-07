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
        await footer.getStartedPageFooterLink();
        const getStartedPageText = await gettingStartedPage.getHeaderTextGettingStarted();
        expect(getStartedPageText).toEqual('Getting Started');
    });

    it(`Button 'Api Reference' on main page should be clickable`, async () => {
        await footer.navigate('https://webdriver.io/');
        await footer.getApiReferenceFooterLink();
        const getIntroductionPageText = await introductionPage.getHeaderTextIntroductionPage();
        expect(getIntroductionPageText).toEqual('Introduction');
    });

    it(`Button 'Contribute' on main page should be clickable`, async () => {
        await footer.navigate('https://webdriver.io/');
        await footer.getContributeFooterLink();
        const getContributePageText = await contributePage.getHeaderTextContributePage();
        expect(getContributePageText).toEqual('Contribute');
    });

    it(`Button 'Get started' on main page should be clickable`, async () => {
        await footer.navigate('https://webdriver.io/');
        await footer.getHelpFooterLink();
        const getStartedPageText = await needHelpPage.getHeaderTextNeedHelpPage();
        expect(getStartedPageText).toEqual('Need Help?');
    });
});