class BaseElement {
    async click(selector) {
        await $(selector).waitForClickable();
        await $(selector).click();
        await browser.pause(3000);

    }
    async getText(selector){
        return await $(selector).getText();
    }

}
module.exports = BaseElement;