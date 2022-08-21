const Header = require('../PageObjects/PageComponents/Header');
const header = new Header();

class HamburgerButtons {
    constructor() {

        this.toWomansItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/zhenshchinam"]';
        this.shoesItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/obuv"]';
        this.toChildrenItemMenu = 'href="https://www.wildberries.by/catalog/detyam"';
        this.toMansItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/muzhchinam"]'
        this.homeItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/dom-i-dacha"]';
        this.beautyItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/krasota"]';
        this.accessoriesItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/aksessuary"]';
        this.electronicItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/elektronika"]';
        this.toysItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/igrushki"]';
        this.furnitureItemMenu = 'href="https://www.wildberries.by/catalog/dom/mebel"';
        this.forAdultsItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/aksessuary/tovary-dlya-vzroslyh"]';
        this.appliancesItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/bytovaya-tehnika"]';
        this.petsSuppliesItemMenu = 'href="https://www.wildberries.by/catalog/tovary-dlya-zhivotnyh"';
        this.sportsItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/sport"]';
        this.autoItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/aksessuary/avtotovary"]';
        this.schoolItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/detyam/shkola"]';
        this.booksItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/knigi"]';
        this.premiumItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/premium-store"]';
        this.repairItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/dom-i-dacha/instrumenty"]';
        this.gardenandCottageItemMenu = '..menu-burger__main-list-link[href="https://www.wildberries.by/catalog/dachniy-sezon"]';
        this.stationeryItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/catalog/knigi-i-diski/kantstovary"]';
        this.promotionsItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/promotions"]';
        this.brandListItemMenu = '.menu-burger__main-list-link[href="https://www.wildberries.by/brandlist/all"]';

    }

    async getItemHamburgerMenu(page){

        await page.click(header.burgerMenuButton);
        await page.waitForTimeout(1000)
        await page.click(this.autoItemMenu);
        await page.waitForTimeout(1000);

    }
}
module.exports = HamburgerButtons;