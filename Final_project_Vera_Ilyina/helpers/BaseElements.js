class BaseElements {

	constructor(page, newPage) {

		this.page = page;
		this.newPage = newPage;

	};

	async click(element, nextElement){

		await this.page.waitForSelector(element);
		await this.page.click(element);
		await this.page.waitForTimeout(nextElement);
		await this.page.waitForTimeout(2000);

	};


	async focusOnNewTab(page, browser, selector){

		const pageTarget = page.target();
		const newTarget = await browser.waitForTarget(
			(target) => target.opener() === pageTarget
		);
		this.newPage = await newTarget.page();
		await this.newPage.waitForSelector(selector);

	};

	async extractNumber(page, selector){

		let price = await page.$eval(selector, element => element.textContent);
		let priceNumber = Number(price.replace(/[^0-9\.]/ig, '').slice(0,-1));
		return { priceNumber };

	};

};

module.exports = BaseElements;