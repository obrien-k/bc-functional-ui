require('@babel/register')({
  extends: './.babelrc',
  ignore: [/node_modules/],
  extensions: ['.js']
});

require('import-export');
require('dotenv').config();

const {
  setHeadlessWhen
} = require('@codeceptjs/configure');
const Globals = require("./src/global-constants");

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/functional/!(examples)/*-spec.js',
  output: './logs',
  helpers: {
    REST: {
      endpoint: Globals.BMP_HOST,
      onRequest: () => {},
    },
    WebDriver: {
      url: Globals.CP_HOST,
      browser: 'chrome',
      port: 4444,
      windowSize: '1500x1000',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--headless', '--disable-gpu', '--no-sandbox']
        },
      },
      keepBrowserState: true,
      keepCookies: true,
      smartWait: 5000,
      waitForTimeout: 5000,
      testName: '',
      restart: false,
    },
    Mochawesome: {
      uniqueScreenshotNames: true,
    },
    MockRequestHelper: {
      require: '@codeceptjs/mock-request',
    },
  },
  include: {
    I: './steps_file.js',

    //page objects
    basePage: './src/pages/base-page.js',
    loginPage: './src/pages/login-page.js',
    cpSideNavPage: './src/pages/cp-side-nav-page.js',
    userSettingsPage: './src/pages/user-settings-page.js',
    bmpClientHomePage: './src/pages/billing/client-home-page.js',

    //helpers
    loginHelper: './src/helpers/login-helper.js',
    userSettingsHelper: './src/helpers/user-settings-helper.js',

    //services
    accountCreation: './src/services/create-account.js',
  },
  bootstrapAll: './presettings.js',
  teardownAll: './presettings.js',
  bootstrap: './presettings.js',
  teardown: './presettings.js',
  mocha: {
    reporterOptions: {
      mochaFile: './test-reports/Functional_Test_Results.xml',
      reportPageTitle: 'BC Functional UI Test Suite',
      reportDir: 'test-reports',
      reportFilename: 'Test_Report',
      json: false,
    }
  },
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
