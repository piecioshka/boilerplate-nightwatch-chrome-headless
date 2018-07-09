const TARGET_PAGE_URL = 'https://piecioshka.pl/blog/';
const PAGE_LOAD_DELAY = 3000;

module.exports = {
    'Is header contains correct text?': (browser) => {
        browser.url(TARGET_PAGE_URL);
        browser.waitForElementVisible('body', PAGE_LOAD_DELAY);
        browser.assert.containsText('h2', 'Piotr Kowalski');
        browser.end();
    },

    'Is main part of app contains proper number of elements?': (browser) => {
        browser.url(TARGET_PAGE_URL);
        browser.waitForElementVisible('body', PAGE_LOAD_DELAY);
        browser.elements('css selector', '#menu li', (result) => {
            if (result.value.length !== 4) {
                browser.assert.fail('Number of elements is not correct');
            }
        });
        browser.end();
    },

    'Capture screenshot to see manually that page looks correct': (browser) => {
        browser.url(TARGET_PAGE_URL);
        browser.waitForElementVisible('body', PAGE_LOAD_DELAY);
        let filename = './screenshots/screenshot-' + new Date().toISOString() + '.png';
        browser.saveScreenshot(filename);
        browser.end();
    }
};
