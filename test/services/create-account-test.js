import {
  createAccountFailureMock,
  createAccountBcSetupNodeSuccessMock
} from '../mocks/create-account-mocks'
import {
  createAccount
} from './../../src/services/create-account'

require('regenerator-runtime');

describe('createAccount', () => {
  it('throws an error on bad request', async () => {
    createAccountFailureMock();
    expect.assertions(1);
    try {
      await createAccount('example@example.com');
    } catch(e) {
      expect(e).toEqual("Account creation failed for example@example.com!")
    }
  });

  it('returns the body on success', async () => {
    createAccountBcSetupNodeSuccessMock();
    const res = await createAccount('example@example.com');
    expect(res).toMatchObject({
      id: 1
    });
  });
});

