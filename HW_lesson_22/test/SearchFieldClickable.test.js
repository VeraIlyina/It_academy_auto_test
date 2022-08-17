const { expect }  = require('chai');
const StartBrowser  = require('../PageObjects/browserConfig');
const SearchPage = require('../PageObjects/PageComponents/SearchPage');
const FAQPage = require('../PageObjects/FAQPage')
const fAQPage = new FAQPage();


describe('Testing button search Puppeteer site', () => {

    let browser;
    let page;
    let searchPage;

    before(async () => {
        browser = await StartBrowser();
        page = await browser.newPage();
        searchPage = new SearchPage(page);
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

    it('Button "Search" should find text "Selenium"', async () => {
        await searchPage.searchFor('Selenium');
        let element = await page.$(fAQPage.headerTextIsPuppeteerreplacingSeleniumWebDriver);
        const text = await page.$eval(fAQPage.headerTextIsPuppeteerreplacingSeleniumWebDriver, element => element.textContent);
        expect(text).to.eql('Q: Is Puppeteer replacing Selenium/WebDriver?​');
    });

});

