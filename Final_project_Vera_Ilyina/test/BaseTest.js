const { expect }  = require('chai');
const StartBrowser  = require('../PageObjects/browserConfig');
const SearchComponents = require('../PageObjects/PageComponents/SearchComponents.js');
const SearchResultPage = require('../PageObjects/SearchResultPage');
const BasketPage = require('../PageObjects/BasketPage');
const ProductPage = require('../PageObjects/ProductPage');
const FilterBlock = require('../PageObjects/PageComponents/FilterBlock');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

const searchResultPage = new SearchResultPage();
const basketPage = new BasketPage();
const productPage = new ProductPage();
const filterBlock = new FilterBlock();


describe(' Base(smoke) testing', () => {

    let browser;
    let page;
    let searchComponents;
    let recorder;

    before('Open browser and page',async () => {

        browser = await StartBrowser();
        page = await browser.newPage();
        searchComponents = new SearchComponents(page);
        const recorder = new PuppeteerScreenRecorder(page);
        await recorder.start('./screenshot/simple.mp4');
        await page.goto('https://www.wildberries.by/');
        const context = browser.defaultBrowserContext();
        await context.overridePermissions('https://www.wildberries.by/', ['geolocation']);

    });

        afterEach('take screenshot on failure', async function () {

        if (this.currentTest.state !== 'passed') {

            await page.screenshot({path: `./screenshot/ErrorBaseTest.png`});

        }

    });

    after('Close browser', async function () {
        await browser.close();
    });

    it('1. Search product should be found', async () => {

        await searchComponents.textSearch('Линейка', searchResultPage.searchResultTitle);
        const getText = await page.$eval(searchResultPage.searchResultTitle, element => element.textContent);
        expect(getText).to.eql('По запросу «Линейка» найдено');

    });

    it('2. Filter should be selected', async () => {

        await page.waitForSelector(filterBlock.filterBrandFirstCheckbox);
        await page.click(filterBlock.filterBrandFirstCheckbox);
        await page.waitForSelector(filterBlock.filterFirstChoise, { visible : true });
        const getText = await page.$eval(filterBlock.filterFirstChoise, element => element.textContent);
        expect(getText).to.eql('            Brauberg        ');

    });

    it('3. Product should be clickable', async () => {

        await page.click(searchResultPage.firstProductOnResultPage);
        await page.waitForSelector(productPage.productPageHeader);
        const getText = await page.$eval(productPage.productPageHeader, element => element.textContent);
        expect(getText).to.eql('Brauberg');

    });

    it('4. Product should add in basket', async () => {

        await productPage.addProductInBasketAndGoToBasket(page);
        const getText = await page.$eval(basketPage.basketPageHeader, element => element.textContent);
        expect(getText).to.eql('Корзина');

    });

});
