/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type basePage = typeof import('./src/pages/base-page.js');
type loginPage = typeof import('./src/pages/login-page.js');
type cpSideNavPage = typeof import('./src/pages/cp-side-nav-page.js');
type userSettingsPage = typeof import('./src/pages/user-settings-page.js');
type loginHelper = typeof import('./src/helpers/login-helper.js');
type userSettingsHelper = typeof import('./src/helpers/user-settings-helper.js');
type accountCreation = typeof import('./src/services/create-account.js');
type MockRequestHelper = import('@codeceptjs/mock-request');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, basePage: basePage, loginPage: loginPage, cpSideNavPage: cpSideNavPage, userSettingsPage: userSettingsPage, loginHelper: loginHelper, userSettingsHelper: userSettingsHelper, accountCreation: accountCreation }
  interface CallbackOrder { [0]: CodeceptJS.I; [1]: basePage; [2]: loginPage; [3]: cpSideNavPage; [4]: userSettingsPage; [5]: loginHelper; [6]: userSettingsHelper; [7]: accountCreation }
  interface Methods extends CodeceptJS.REST, CodeceptJS.WebDriver, CodeceptJS.Mochawesome, MockRequestHelper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
