const MainPage = require('../pageobjects/MainPage');
const mainPage = new MainPage();



describe(`Testing WebdriverIO main page clickable link on feature content`, function() {

    it(`Link "React" on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectReactLinkWebsiteOnMainPage();
        await expect(browser).toHaveUrl('https://reactjs.org/');
    });


    it(`Link "Angular" on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectAngularLinkWebsiteOnMainPage();
        await expect(browser).toHaveUrl('https://angular.io/');
    });


    it(`Link "Polymer" on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectPolymerLinkWebsiteOnMainPage();
        await expect(browser).toHaveUrl('https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview');
    });


    it(`Link "Vue.js" on main page should be clickable`, async () => {
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.selectVueJsLinkWebsiteOnMainPage();
        await expect(browser).toHaveUrl('https://vuejs.org/');
    });
});