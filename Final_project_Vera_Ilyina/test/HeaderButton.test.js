// const Header = require('../PageObjects/PageComponents/Header');
// const { expect }  = require('chai');
// const StartBrowser  = require('../PageObjects/BrowserConfig');
// const BaseElements = require('../helpers/BaseElements');
// const DeliveryPage = require('../PageObjects/DeliveryPage');
// const HamburgerButtons = require('../PageObjects/HamburgerButtons');
// const CatalogStartContent = require('../PageObjects/CatalogStartContent');
// const ChangeLanguageDropdownMenu = require('../PageObjects/ChangeLanguageDropdownMenu');
// const WBPartnersPage = require('../PageObjects/WBPartnersPage');
//
// const header = new Header();
// const deliveryPage = new DeliveryPage();
// const hamburgerButtons = new HamburgerButtons();
// const catalogStartContent = new CatalogStartContent();
// const changeLanguageDropdownMenu = new ChangeLanguageDropdownMenu();
// const wbPartnersPage = new WBPartnersPage();
//
//
//
// describe('Testing Header Buttons https://www.wildberries.by/', () => {
//
//     let browser;
//     let page;
//     let baseElements;
//
//     beforeEach(async () => {
//         browser = await StartBrowser();
//         page = await browser.newPage();
//         baseElements = new BaseElements(page);
//         await page.goto('https://www.wildberries.by/');
//         const context = browser.defaultBrowserContext();
//         await context.overridePermissions('https://www.wildberries.by/', ['geolocation']);
//
//     });
//
//     afterEach('take screenshot on failure', async function () {
//         if (this.currentTest.state !== 'passed') {
//             await page.screenshot({path: `./screenshot/${1}.png`});
//         }
//     });
//
//     afterEach('close browser', async function () {
//         await browser.close();
//     });
//
//    it("5. Button 'Language' on main menu should be clickable", async () => {
//
//         await page.click(header.changeLanguageButton);
//         await page.click(changeLanguageDropdownMenu.selectArmeniaLanguage);
//         await expect(page.url()).equal('https://am.wildberries.ru/');
//
//     });
//
//     it("6. Button 'Select address delivery' on main menu should be clickable", async () => {
//
//         await header.changeDeliveryAddress(page);
//         const text = await page.$eval(header.changeAddressButton, element => element.textContent);
//         await expect(text).equal('г. Минск (Минская область), улица Прушинских, д. 31А');
//
//     });
//
//     it("7. Button 'Free delivery' on main menu should be clickable", async () => {
//
//         await page.click(header.freeDeliveryInfoButton);
//         await page.waitForSelector(deliveryPage.headerDeliveryPage);
//         const text = await page.$eval(deliveryPage.headerDeliveryPage, element => element.textContent);
//         await expect(text).equal('Доставка');
//
//     });
//
//     it("8. Button 'Sale on Wildberries' on main menu should be clickable", async () => {
//
//         await page.click(header.sellOnWildberries);
//         await baseElements.focusOnNewTab(page, browser, wbPartnersPage.partnerShipWithWildberries);
//         await expect(baseElements.newPage.url()).equal('https://seller.wildberries.ru/login/ru?redirect_url=/');
//         await baseElements.newPage.close();
//
//     });
//
//     it("9. Button 'Text chat' on main menu should be clickable", async () => {
//
//         await page.click(header.textChatButton);
//         const text = await page.$eval('.chat__header', element => element.textContent);
//         await expect(text).equal('Чат поддержки');
//
//     });
//
//         it("10. Button 'BurgerMenu' on main menu should be clickable", async () => {
//         await  hamburgerButtons.getItemHamburgerMenu(page);
//         const text = await page.$eval(catalogStartContent.catalogContentTitle, element => element.textContent);
//         await expect(text).equal('Автотовары');
//
//     });
// });
//
//
//
