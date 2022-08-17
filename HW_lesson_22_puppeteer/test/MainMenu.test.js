const { expect }  = require('chai');
const StartBrowser  = require('../PageObjects/browserConfig');
const BaseElements = require('../helpers/BaseElements');
const MainMenu = require('../PageObjects/MainMenu');
const mainMenu = new MainMenu();


describe('Testing links main menu', () => {

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
            await page.screenshot({ path: './screenshot/pptr.png'});
        }
    });

    after('close browser', async function () {
        await browser.close();
    });

    it("Button 'Puppeteer' on main menu should be clickable", async () => {
        await baseElements.waitForSelectorAndClick(mainMenu.mainMenuPuppeteer);
        expect(await page.url()).to.eql('https://pptr.dev/');
    });

    it("Button 'FAQ' on main menu should be clickable", async () => {
        await baseElements.waitForSelectorAndClick(mainMenu.mainMenuFAQ);
        expect(await page.url()).to.eql('https://pptr.dev/faq');
    });

    it("Button 'Troubleshooting' on main menu should be clickable", async () => {
        await baseElements.waitForSelectorAndClick(mainMenu.mainMenuTroubleShooting);
        expect(await page.url()).to.eql('https://pptr.dev/troubleshooting');
    });

    it("Button 'Contributing' on main menu should be clickable", async () => {
        await baseElements.waitForSelectorAndClick(mainMenu.mainMenuContributing);
        expect(await page.url()).to.eql('https://pptr.dev/contributing');
    });

    it("Button 'Chromium Support' on main menu should be clickable", async () => {
        await baseElements.waitForSelectorAndClick(mainMenu.mainMenuChromiumSupport);
        expect(await page.url()).to.eql('https://pptr.dev/chromium-support');
    });

    it("Button 'API' on main menu should be clickable", async () => {
        await baseElements.waitForSelectorAndClick(mainMenu.mainMenuAPI);
        expect(await page.url()).to.eql('https://pptr.dev/api/');
    });
});
