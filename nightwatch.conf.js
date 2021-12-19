module.exports = {
  src_folders: ["e2e/"],

  output_folder: "reports/",

  detailed_output: false,

  webdriver: {
    start_process: true,
    server_path: "node_modules/.bin/chromedriver",
    port: 9515,
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["--headless"],
        },
      },
    },
  },
};
