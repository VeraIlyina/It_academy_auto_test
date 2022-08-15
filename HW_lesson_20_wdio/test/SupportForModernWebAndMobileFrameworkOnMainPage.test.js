const MainPage = require('../pageobjects/MainPage');
const mainPage = new MainPage();



describe(`Testing WebdriverIO main page clickable link on feature content`, function() {

    it(`Link "React" on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await $(mainPage.reactLinkWebsiteOnMainPage).click();
        await expect(browser).toHaveUrl('https://reactjs.org/');
    });


    it(`Link "Angular" on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await $(mainPage.angularLinkWebsiteOnMainPage).click();
        await expect(browser).toHaveUrl('https://angular.io/');
    });


    it(`Link "Polymer" on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await $(mainPage.polymerLinkWebsiteOnMainPage).click();
        await expect(browser).toHaveUrl('https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview');
    });


    it(`Link "Vue.js" on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await $(mainPage.vueJsLinkWebsiteOnMainPage).click();
        await expect(browser).toHaveUrl('https://vuejs.org/');
    });
});