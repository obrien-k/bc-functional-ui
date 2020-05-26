const { setHeadlessWhen } = require('@codeceptjs/configure');
const Globals = require("./src/global-constants");

require('import-export');
require('dotenv').config();

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/*.js',
  output: './logs',
  helpers: {
    REST: {
      endpoint: Globals.HOST,
      onRequest: () => {},
    },
    WebDriver: {
      url: Globals.HOST,
      browser: 'chrome',
      port: 4444,
      windowSize: '1500x1000',
      desiredCapabilities: {
        chromeOptions: {
          args: [ '--headless', '--disable-gpu', '--no-sandbox' ]
        },
      },
      keepBrowserState: true,
      keepCookies: true,
      smartWait: 5000,
      waitForTimeout: 5000,
      testName: '',
    },
    MockRequestHelper: {
      require: '@codeceptjs/mock-request',
    },
  },
  include: {
    /**
     * helpers, page objects
     */
    I: './steps_file.js',
    basePage: './src/pages/base-page.js',
    loginPage: './src/pages/login-page.js',
    cpSideNavPage: './src/pages/cp-side-nav-page.js',
    userSettingsPage: './src/pages/user-settings-page.js',
    loginHelper: './src/helpers/login-helper.js',
    AccountData: './src/config/data/account-data.js',
    Globals: './src/global-constants.js',

    /**
     * services
     */
    accountCreation: './src/services/create-account.js',
  },
  bootstrap: {},
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
