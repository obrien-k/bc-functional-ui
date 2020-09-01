const createAccount = require('../../../src/services/create-account');
const { createStore } = require('../../../src/services/store-service');

Feature('Store provisioning example spec');

Scenario('test store provisioning workflow', async() => {
    const emailAddr = `auto-${new Date().getTime()}@bigcommerce.com`;
    const account = await createAccount(emailAddr, 'non-trial');

    console.log(account);

    const storeRes = await createStore(account);
    console.log(storeRes);
});
