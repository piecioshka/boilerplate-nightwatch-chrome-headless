// Od wersji 61 programy wspierają argument "headless".
// Jeśli masz Chrome od tej wersji to nie musisz instalować Chrome Canary.
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const CHROME_CANARY = "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary";

module.exports = {
    "src_folders": [
        "test/e2e/"
    ],

    "output_folder": "reports/",

    // Nie pokazujemy wszystkich szczegółów dotyczących przeprowadzania testów.
    "detailed_output": false,

    "test_settings": {
        "default": {
            "silent": true,

            // Pomijamy przypadki, kiedy testy nie przeszły i kontynuujemy
            // sprawdzanie scenariuszy.
            "skip_testcases_on_fail": false,

            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": {
                    "args": [
                        "--headless"
                    ],
                    "binary": CHROME
                }
            }
        }
    }
};
