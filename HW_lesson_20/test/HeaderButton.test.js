const Header = require('../pageobjects/pageComponent/Header');
const header = new Header();

describe('Testing Header Buttons', function (){

    it(`Button 'GitHub' on header should be clickable`, async() => {
        await header.navigate('https://webdriver.io/');
        await header.selectGitHubButton();
        await browser.switchWindow('https://github.com/webdriverio/webdriverio');
        await expect(browser).toHaveUrlContaining('github.com');

    });


    it('Background color should have light theme', async () => {
        await header.navigate('https://webdriver.io/');
        const backgroundMainPage = await header.getBackgroundMainPage();
        const cssPropertyBackgroundColor = await backgroundMainPage.getCSSProperty('background-color');
        expect(cssPropertyBackgroundColor.parsed.hex).toEqual('#ffffff');
    });


    it('Click on change light/dark theme button should change background color on \'#1c1e21\'', async () => {
        await header.selectChangeLightDarkThemeButton();
        const backgroundMainPage = await header.getBackgroundMainPage();
        const cssPropertyBackgroundColor = await backgroundMainPage.getCSSProperty('background-color');
        expect(cssPropertyBackgroundColor.parsed.hex).toEqual('#1c1e21');
    });



})