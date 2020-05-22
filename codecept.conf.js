const { setHeadlessWhen } = require('@codeceptjs/configure');
require('import-export');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/*_test.js',
  output: './logs',
  helpers: {
    WebDriver: {
      url: 'https://localhost',
      browser: 'chrome',
      port: 4444,
      windowSize: '1500x1000',
      desiredCapabilities: {
        chromeOptions: {
          args: [ "--disable-gpu", "--no-sandbox" ]
        },
      },
      keepBrowserState: true,
      keepCookies: true,
      smartWait: 5000,
      waitForTimeout: 5000,
    }
  },
  include: {
    I: './steps_file.js',
    basePage: './src/pages/base-page.js',
    loginPage: './src/pages/login-page.js',
    cpSideNavPage: './src/pages/cp-side-nav-page.js',
    userSettingsPage: './src/pages/user-settings-page.js',
    loginHelper: './src/helpers/login-helper.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'bc-functional-ui',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
};
