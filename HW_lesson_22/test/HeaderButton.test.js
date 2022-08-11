const Header = require('../PageObjects/PageComponents/Header');
const header = new Header();
const { expect }  = require('chai');
const StartBrowser  = require('../PageObjects/browserConfig');
const BaseElements = require('../helpers/BaseElements');
const MainMenu = require('../PageObjects/MainMenu');
const mainMenu = new MainMenu();

describe('Testing Header Buttons', () => {

    let browser;
    let page;
    let baseElements;

    before(async () => {
        browser = await StartBrowser();
        page = await browser.newPage();
        baseElements = new BaseElements(page);
        await page.goto('https://pptr.dev');
    });

    afterEach('take screenshot on failure', async function () {
        if (this.currentTest.state !== 'passed') {
            await page.screenshot({path: './screenshot/pptr.png'});
        }
    });

    after('close browser', async function () {
        await browser.close();
    });

    it('Background color should have light theme', async () => {
        const allMainPageHTML = header.allMainPageHTML;
        const getAttributeDataTheme= await page.$eval(allMainPageHTML, element=> element.getAttribute("data-theme"))
        console.log(getAttributeDataTheme);
        expect(getAttributeDataTheme).to.eql('light');
    });

    it('Click on change light/dark theme button should change background color on dark theme', async () => {
        await baseElements.waitForSelectorAndClick(header.changeLightDarkThemeButton);
        const allMainPageHTML = header.allMainPageHTML;
        const getAttributeDataTheme = await page.$eval(allMainPageHTML, element=> element.getAttribute("data-theme"))
        expect(getAttributeDataTheme).to.eql('dark');
    });

    it('Click on logo should open Main page with header text "Puppeteer"', async () => {
        await baseElements.waitForSelectorAndClick(mainMenu.mainMenuFAQ);
        await baseElements.waitForSelectorAndClick(header.logoButton);
        let element = await page.$(mainMenu.headerTextPuppeteerOnMainPage)
        let value = await page.evaluate(el => el.textContent, element)
        expect(value).to.eql('Puppeteer');
    });
});

