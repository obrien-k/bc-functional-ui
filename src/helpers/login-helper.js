const sideNav = require('../pages/cp-side-nav-page');
const loginPage = require('../pages/login-page');
const bmpClientHomePage = require('../pages/billing/client-home-page');
const userSettings = require('../helpers/user-settings-helper').default;

module.exports = function() {

    return actor({

        login(email, password) {
            this.waitForElement(loginPage.selectors.user_email_input);
            this.waitForElement(loginPage.selectors.password_input);
            this.waitForElement(loginPage.selectors.login_button);
            this.fillField(loginPage.selectors.user_email_input, email);
            this.fillField(loginPage.selectors.password_input, password);
            this.click(loginPage.selectors.login_button);
            this.dontSee(loginPage.selectors.user_email_input);
        },

        logoutFromUI() {
            userSettings().navigateToUserSettings();
            this.waitForElement(sideNav.selectors.logout_nav);
            this.click(sideNav.selectors.logout_nav);
            this.dontSee(sideNav.selectors.logout_nav);
            this.waitForElement(loginPage.selectors.user_email_input);
        },

        logoutFromBMPCUI() {
            bmpClientHomePage.logout();
        }

    });

};

