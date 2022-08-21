class BaseElements {
    constructor(page, newPage) {
        this.page = page;
        this.newPage = newPage;
    }

    async focusOnNewTab(page,browser, selector){

        const pageTarget = page.target();
        const newTarget = await browser.waitForTarget(
            (target) => target.opener() === pageTarget
        );
        this.newPage = await newTarget.page()
        await this.newPage.waitForSelector(selector)

    }
}
module.exports = BaseElements;