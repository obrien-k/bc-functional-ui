const createAccount = require('../../../src/services/create-account');

Feature('Account creation example spec');

Scenario('test create account workflow', async() => {
    const emailAddr = `auto-${new Date().getTime()}@bigcommerce.com`;
    const res = await createAccount(emailAddr, 'non-trial');
    console.log(res);
});
