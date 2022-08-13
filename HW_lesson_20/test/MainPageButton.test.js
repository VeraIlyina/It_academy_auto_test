const MainPage = require('../pageobjects/MainPage');
const GettingStartedPage = require('../pageobjects/GettingStartedPage');
const ResourcesPage = require('../pageobjects/ResourcesPage');

const mainPage = new MainPage();
const gettingStartedPage = new GettingStartedPage();
const resourcesPage = new ResourcesPage();



describe(`Testing WebdriverIO main page container buttons`, function() {

    it(`Button 'Get started' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButton(mainPage.getStartedButton);
        const getTextGetStarted = await $(gettingStartedPage.headerTextGettingStarted).getText()
        expect(getTextGetStarted).toEqual('Getting Started');
    });

    it(`Button 'Watch Talks' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButton(mainPage.watchTalksButton);
        const getResourcesPageHeaderText = await $(resourcesPage.headerTextResources).getText();
        expect(getResourcesPageHeaderText).toEqual('Resources');
    });


    it(`Button 'Read The Book' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButton(mainPage.readTheBookButton);
        await browser.switchWindow('https://leanpub.com/webapp-testing-guidebook')
        await expect(browser).toHaveUrlContaining('leanpub.com');
    });


    it(`Button 'Take The Course' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButton(mainPage.takeTheCourseButton);
        await browser.switchWindow('https://learn.webdriver.io/');
        await expect(browser).toHaveUrl('https://learn.webdriver.io/');
    });


    it(`Button 'Support' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButton(mainPage.supportButton);
        await browser.switchWindow('https://gitter.im/webdriverio/webdriverio');
        await expect(browser).toHaveUrl('https://gitter.im/webdriverio/webdriverio');
    });

});