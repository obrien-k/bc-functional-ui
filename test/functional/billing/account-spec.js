import {BMP_HOST, TEST_USER_EMAIL, TEST_USER_PASSWORD} from '../../../src/global-constants'

Feature('Client UI: Account');

Before((I, loginHelper) => {
    I.amOnPage(BMP_HOST);
    loginHelper.login(TEST_USER_EMAIL, TEST_USER_PASSWORD);
});

After((I, loginHelper) => {
    loginHelper.logoutFromBMPCUI();
});

Scenario('Merchant with trial store can log into account management interface', (I) => {
    I.see('My Account');
});

Scenario('Merchant with trial store can change company name', (I, bmpClientHeaderNav, bmpAccountHelper) => {
    bmpClientHeaderNav.navigateToAccountOptions('Account details');
    bmpAccountHelper.editAccountInformation('BMP Test Account')
});
