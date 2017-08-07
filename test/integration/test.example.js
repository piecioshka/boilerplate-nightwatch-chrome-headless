'use strict';

const TARGET_PAGE_URL = 'https://piecioshka.pl/blog/';

module.exports = {
    'Is header contains correct text?': (browser) => {
        browser.url(TARGET_PAGE_URL);
        browser.waitForElementVisible('body', 3000);
        browser.assert.containsText('h2', 'Piotr Kowalski');
        browser.end();
    },

    'Is main part of app contains proper number of elements?': (browser) => {
        browser.url(TARGET_PAGE_URL);
        browser.waitForElementVisible('body', 3000);
        browser.elements('css selector', '#menu li', (result) => {
            if (result.value.length !== 4) {
                browser.assert.fail('Number of elements is not correct');
            }
        });
        browser.end();
    },

    'Capture screenshot to see manually that page looks correct': (browser) => {
        browser.url(TARGET_PAGE_URL);
        browser.waitForElementVisible('body', 1000);
        let filename = './screenshots/screenshot-' + new Date().toISOString() + '.png';
        browser.saveScreenshot(filename);
        browser.end();
    }
};
