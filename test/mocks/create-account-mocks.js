import AccountData from '../fixtures/account-data';
import nock from 'nock';
import matches from 'lodash.matches';

export const createAccountSuccessResp = {
  email: 'example@example.com',
  company_name: 'Bigcommerce',
  password: AccountData.password
};

export const createAccountErrorResp = {
  errorMessage: 'Create account failed'
};

const matcherDataLocal = {
  data: {
    email_address: 'example@example.com'
  }
};

export const createAccountFailureMock = () => {
  nock(/https/).post(
    '/api/v1/accounts/', matches(matcherDataLocal)
  ).reply(400, createAccountErrorResp)
};

export const createAccountBcSetupNodeSuccessMock = () => {
  nock(/https/)
    .matchHeader('Content-Type', 'application/json')
    .post('/api/v1/accounts/', matches(matcherDataLocal))
    .reply(200, createAccountSuccessResp)
};
