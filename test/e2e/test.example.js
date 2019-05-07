const TARGET_PAGE_URL = 'https://piecioshka.pl/blog/';
const PAGE_LOAD_DELAY = 3000;

module.exports = {
    'Is header contains correct text?': (browser) => {
        browser.url(TARGET_PAGE_URL)
            .waitForElementVisible('body', PAGE_LOAD_DELAY)
            .assert.containsText('h1', 'Piotr Kowalski')
            .end();
    },

    'Is main menu contains any elements?': (browser) => {
        browser.url(TARGET_PAGE_URL)
            .waitForElementVisible('body', PAGE_LOAD_DELAY)
            .elements('css selector', '#menu li', (result) => {
                const menuSize = result.value.length;
                browser.assert.equal(menuSize, 9);
            })
            .end();
    },

    'Capture screenshot to see manually that page looks correct': (browser) => {
        const filename = './screenshots/screenshot-' + new Date().toISOString() + '.png';

        browser.url(TARGET_PAGE_URL)
            .waitForElementVisible('body', PAGE_LOAD_DELAY)
            .saveScreenshot(filename)
            .end();
    }
};
