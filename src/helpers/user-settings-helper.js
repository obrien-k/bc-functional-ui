import { selectors } from '../pages/user-settings-page';
import { DEFAULT_TIMEOUT } from '../global-constants';

module.exports = function() {

    return actor({

        navigateToUserSettings() {
            this.click('Home');
            this.waitForElement(selectors.my_profile_nav, DEFAULT_TIMEOUT);
            this.click(selectors.my_profile_nav);
        },

        selectEditProfile() {
            this.click(selectors.edit_profile_nav);
            within({frame: '#content-iframe'}, () => {
                this.waitForText('Edit Profile', DEFAULT_TIMEOUT, 'h1');
            });

        },

        selectChangeEmailAddress() {
            this.click(selectors.change_email_address_nav);
            within({frame: '#content-iframe'}, () => {
            this.waitForText('Change Email Address', DEFAULT_TIMEOUT, 'h1');
            });
        },

        selectChangePassword() {
            this.click(selectors.change_password_nav);
            within({frame: '#content-iframe'}, () => {
                this.waitForText('Change Password', DEFAULT_TIMEOUT, 'h1');
            });
        }

    });

};
