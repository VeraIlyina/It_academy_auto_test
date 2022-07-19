
const { Builder, By, Key} = require('selenium-webdriver');
const { expect } = require('chai');
const driver = new Builder().forBrowser('chrome').build();

describe(`Go to website and enter full screen mode`, function() {

    it(`Site should open and get fullscreen`, async () => {

        await driver.get('https://chromedriver.chromium.org/home'); //1) зайти на сайт https://chromedriver.chromium.org/home
        await driver.manage().window().maximize();
        await driver.sleep(2000);

        const acceptCookiesButton = await driver.findElement(By.css('.vzKQHb.K2OSr'));
        await driver.actions().click(acceptCookiesButton).perform();
        await driver.sleep(1000);
    })
})


describe(`Сheck the text of the main title "ChromeDriver"`, function() {

    it(`Text in the title is 'ChromeDriver'`, async () => {
        const textChromeDriver = await driver.findElement(By.xpath('//*[@class=" Rn3Z1b"]')).getText();//2) проверить текст основного тайтла "ChromeDriver"
        expect(textChromeDriver).eqls('ChromeDriver' );
    })
})

describe(`Click in the header on the item "Chrome Extensions"`, function() {

    it(`Should click on the item "Chrome Extensions"`, async () => {
        const acceptChromeExtensionsButton = await driver.findElement(By.xpath('//li[position() = 3]//*[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//*[@class="I35ICb"]'));
        await driver.actions().click(acceptChromeExtensionsButton).perform(); //3) кликнуть в хедере на пункт "Chrome Extencions"
        await driver.sleep(1000);
    })
})

describe(`Make a highlight for the new main title`, function() {

    it(`Color of the text is yellow`, async () => {
        const siteLogoContainer = await driver.findElement(By.xpath('//*[@class=" Rn3Z1b"]'));//4) сделать хайлайт для нового основного тайтла
        await driver.executeScript('arguments[0].style.color="yellow"', siteLogoContainer);
        await driver.sleep(1000);
    })
})

describe(`Check that the new title is "Chrome Extensions"`, function() {

    it(`Text in the title is 'Chrome Extensions'`, async () => {
        const textChromeExtensions = await driver.findElement(By.xpath('//*[@class=" Rn3Z1b"]')).getText();
        expect(textChromeExtensions).eqls('Chrome Extensions' ); //5) проверить что новый тайтл стал "Chrome Extencions"
    })
})

describe(`Go to search page`, function() {

    it(`Should open "Search pop-up"`, async () => {
        const findButton = await driver.findElement(By.xpath('//*[@class="vu8Pwe tCHXDc YSH9J"]')); //6. Перейти на страницу поиска
        await driver.actions().click(findButton).perform();

    })
})

describe(`Enter "driver" in search`, function() {

    it(`Should enter "driver" in search field`, async () => {
        const searchField = await driver.findElement(By.css('.whsOnd'));
        await driver.sleep(1000);
        await searchField.sendKeys('driver'); //7. Ввести driver в поиск
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.sleep(1000);
    })
})

describe(`Check that the first link contains the word "driver"`, function() {

    it(`The first link contains the word "drivers"`, async () => {
        const textLinkContainText = await driver.findElement(By.xpath('//*[@class="vH0yjd"]//*[@data-position="1"]')).getAttribute('href');
        expect(textLinkContainText).contain('driver'); //8. Проверить что первая ссылка содержит слово driver
        await driver.sleep(1000);
        await driver.close();
    })
})
