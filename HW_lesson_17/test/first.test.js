// 1) зайти на сайт https://chromedriver.chromium.org/home
//     2) проверить текст основного тайтла "ChromeDriver"
// 3) кликнуть в хедере на пункт "Chrome Extencions"
// 4) сделать хайлайт для нового основного тайтла
// 5) проверить что новый тайтл стал "Chrome Extencions"
//
// 6. Перейти на страницу поиска
// 7. Ввести driver в поиск
// 8. Проверить что первая ссылка содержит слово driver


const { Builder, By, Key } = require('selenium-webdriver');
const { expect } = require('chai');
const driver = new Builder().forBrowser('chrome').build();

async  function getTitlePage(textOfTitle){
    const textOfTitleOnPage = await driver.getTitle();
    expect(textOfTitleOnPage).eqls(textOfTitle);
}

describe(`Сheck the text of the main title "ChromeDriver"`, function() {



    before(async () =>{
        await driver.manage().window().maximize();
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(2000);
        const acceptCookiesButton = await driver.findElement(By.css('.vzKQHb.K2OSr'));
        await driver.actions().click(acceptCookiesButton).perform();

    });


    afterEach(async ()=>{
        await driver.sleep(1000);
    })


    after(async () =>{
        await driver.close();
    });
    

    it(`Check the text 'ChromeDriver - WebDriver for Chrome' in the title of main page`, async () => {
       return getTitlePage('ChromeDriver - WebDriver for Chrome' );
    });


    it(`Check the text 'ChromeDriver - WebDriver for Chrome - Chrome Extensions' in the title of Chrome Extensions page`, async () => {
        const acceptChromeExtensionsButton = await driver.findElement(By.xpath('//li[position() = 3]//*[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//*[@class="I35ICb"]'));
        await driver.actions().click(acceptChromeExtensionsButton).perform();
        return getTitlePage('ChromeDriver - WebDriver for Chrome - Chrome Extensions' );

    });


    it(`Check the first link in search page contains word 'driver'`, async () => {
        const findButton = await driver.findElement(By.xpath('//*[@class="vu8Pwe tCHXDc YSH9J"]'));
        await driver.actions().click(findButton).perform();
        const searchField = await driver.findElement(By.css('.whsOnd'));
        await driver.sleep(1000);
        await searchField.sendKeys('driver'); //7. Ввести driver в поиск
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.sleep(1000);
        const textLinkContainText = await driver.findElement(By.xpath('//*[@class="vH0yjd"]//*[@data-position="1"]')).getAttribute('href');
        expect(textLinkContainText).contain('driver');
        await driver.sleep(1000);

    });
});