const SearchComponents = require('../pageobjects/pageComponent/SearchComponents');
const searchComponents = new SearchComponents();



describe(`Testing button search WebdriverIO site`, function() {

    it(`Button 'Search' should find second value in dropdown menu`, async() => {
        await searchComponents.navigate('https://webdriver.io/');
        await searchComponents.getSearchField();
        await searchComponents.inputSearchValue('API');
        await searchComponents.clickDropdownMenuSearchValue();
        await expect(browser).toHaveUrlContaining('#api');
    });


})