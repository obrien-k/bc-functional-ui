/* This is an example of simple usage of Before and After methods
   It is recommended to include a single feature per spec file */

import { BMP_HOST, TEST_USER_EMAIL, TEST_USER_PASSWORD } from '../../../src/global-constants'

Feature('Examples of Before and After methods usage');

Before((I, loginHelper) => {
    /* This is the equivalent of a beforeEach method in mocha,
       and will be run before every scenario of this feature */
    I.amOnPage(BMP_HOST);
    loginHelper.login(TEST_USER_EMAIL, TEST_USER_PASSWORD);
});

After( (I, loginHelper) => {
    /* This is the equivalent of an afterEach method in mocha,
       and will be run after every scenario of this feature */
    loginHelper.logoutFromBMPCUI();
});

Scenario('Simple Login to BMP', (I) => {
    I.see('My Account');
});

Scenario('Stores and Resources are shown', (I) => {
    I.see('Stores');
    I.see('Resources');
});
