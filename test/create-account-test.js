const { createAccountSuccessMock,
    createAccountSuccessResp,
    createAccountFailureMock,
    createAccountErrorResp,
    createAccountBcSetupNodeSuccessMock } = require('../src/mocks/create-account-mocks');

const { accountCreation } = inject();
const expect = require('chai').expect;

Feature('Create account service tests');

Scenario('Test create account for success', async() => {
    createAccountSuccessMock();
    const res = await accountCreation.createAccount('test');
    expect(res.data.createAccountSuccessResp).to.deep.equal(createAccountSuccessResp);
});

Scenario('Test create account for failure', async() => {
    createAccountFailureMock();
    const res = await accountCreation.createAccount('test');
    expect(res.data.createAccountErrorResp).to.deep.equal(createAccountErrorResp);
});

Scenario('Test create account using server node setup', async() => {
    createAccountBcSetupNodeSuccessMock();
    const res = await accountCreation.createAccount('non-trial');
    expect(res).to.deep.equal({id : 1});
});
