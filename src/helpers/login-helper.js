const sideNav = require('../pages/cp-side-nav-page');
const loginPage = require('../pages/login-page');
const userSettings = require('../helpers/user-settings-helper').default;
import { DEFAULT_TIMEOUT } from '../global-constants';

module.exports = function() {

    return actor({

        login(email, password) {
            this.waitForElement(loginPage.selectors.user_email_input, DEFAULT_TIMEOUT);
            this.fillField(loginPage.selectors.user_email_input, email);
            this.fillField(loginPage.selectors.password_input, password);
            this.click(loginPage.selectors.login_button);
            this.dontSee(loginPage.selectors.user_email_input);
            this.waitForElement(sideNav.selectors.side_nav);
        },

        logoutFromUI() {
            userSettings().navigateToUserSettings();
            this.waitForElement(sideNav.selectors.logout_nav);
            this.click(sideNav.selectors.logout_nav);
            this.dontSee(sideNav.selectors.logout_nav);
            this.waitForElement(loginPage.selectors.user_email_input, DEFAULT_TIMEOUT);
        },

    });

};

