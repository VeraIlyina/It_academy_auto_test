const MainPage = require('../pageobjects/MainPage');
const GettingStartedPage = require('../pageobjects/GettingStartedPage');
const ResourcesPage = require('../pageobjects/ResourcesPage');

const mainPage = new MainPage();
const gettingStartedPage = new GettingStartedPage();
const resourcesPage = new ResourcesPage();



describe(`Testing WebdriverIO main page container buttons`, function() {

    it(`Button 'Get started' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButtonGetStarted();
        const getGettingStartedPageText = await gettingStartedPage.getHeaderTextGettingStarted();
        expect(getGettingStartedPageText).toEqual('Getting Started');
    });

    it(`Button 'Watch Talks' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButtonWatchTalks();
        const getResourcesPageHeaderText = await resourcesPage.getHeaderTextResources();
        expect(getResourcesPageHeaderText).toEqual('Resources');
    });


    it(`Button 'Read The Book' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButtonReadTheBook();
        await browser.switchWindow('https://leanpub.com/webapp-testing-guidebook')
        await expect(browser).toHaveUrlContaining('leanpub.com');
    });


    it(`Button 'Take The Course' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButtonTakeTheCourse();
        await browser.switchWindow('https://learn.webdriver.io/');
        await expect(browser).toHaveUrl('https://learn.webdriver.io/');
    });


    it(`Button 'Support' on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectButtonSupport();
        await browser.switchWindow('https://gitter.im/webdriverio/webdriverio');
        await expect(browser).toHaveUrl('https://gitter.im/webdriverio/webdriverio');
    });

});