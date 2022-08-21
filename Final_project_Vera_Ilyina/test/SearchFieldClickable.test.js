// const { expect }  = require('chai');
// const StartBrowser  = require('../PageObjects/browserConfig');
// const SearchComponents = require('../PageObjects/PageComponents/SearchComponents.js');
// const SearchResultPage = require('../PageObjects/SearchResultPage');
//
// const searchResultPage = new SearchResultPage();
// const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
//
//
// describe('Testing button search Wildberries site', () => {
//
//     let browser;
//     let page;
//     let searchComponents;
//
//     beforeEach(async () => {
//         browser = await StartBrowser();
//         page = await browser.newPage();
//         searchComponents = new SearchComponents(page);
//         const recorder = new PuppeteerScreenRecorder(page);
//         await recorder.start(`./screenshot/video.mp4`);
//         await page.goto('https://www.wildberries.by/');
//         const context = browser.defaultBrowserContext();
//         await context.overridePermissions('https://www.wildberries.by/', ['geolocation']);
//
//     });
//
//     afterEach('take screenshot on failure', async function () {
//         if (this.currentTest.state !== 'passed') {
//             await page.screenshot({path: './screenshot/pptr.png'});
//         }
//     });
//
//     after('Close browser', async function () {
//         await browser.close();
//     });
//
//     it('11. Button "Search" should find text "Блузка"', async () => {
//
//         await searchComponents.textSearch('Блузка', searchResultPage.searchResultTitle,);
//         const text = await page.$eval(searchResultPage.searchResultTitle, element => element.textContent);
//         expect(text).to.eql('По запросу «Блузка» найдено');
//
//     });
// });
//
//
