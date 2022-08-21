const puppeteer = require('puppeteer');

async function StartBrowser() {
    let browser;

    browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        slowMo: 0,
        devtools: false,
        args: [

            "--window-size=1920,1080"
        ]
    });
    return browser;
}

module.exports = StartBrowser;