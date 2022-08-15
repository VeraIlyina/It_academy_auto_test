const puppeteer = require('puppeteer');

async function StartBrowser() {
    let browser;

    browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        devtools: false,
        args: [

            "--window-size=1920,1080"
        ]
    });
    return browser;
}

module.exports = StartBrowser;