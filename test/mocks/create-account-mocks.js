import AccountData from '../fixtures/account-data'
import nock from 'nock'
import matches from 'lodash.matches'

export const createAccountSuccessResp = {
  data: {
    email_address: 'example@example.com',
    company_name: AccountData.companyName,
    password: AccountData.password
  }
}

export const createAccountErrorResp = {
  errorMessage: 'Create account failed'
}

const matcherDataLocal = {
  data: {
    primary_contact_attributes: {
      country: 'US'
    }
  }
}

export const createAccountSuccessMock = () => {
  nock(/https/).post('/api/v1/accounts/',
    body => body.data &&
    body.data.email_address &&
    body.data.company_name &&
    body.data.password &&

    body.data.primary_contact_attributes &&
    body.data.primary_contact_attributes.first_name &&
    body.data.primary_contact_attributes.last_name &&
    body.data.primary_contact_attributes.email_address &&
    body.data.primary_contact_attributes.is_trial &&
    body.data.primary_contact_attributes.state &&
    body.data.primary_contact_attributes.country &&

    body.data.billing_contact_attributes.first_name &&
    body.data.billing_contact_attributes.last_name &&
    body.data.billing_contact_attributes.email_address &&
    body.data.billing_contact_attributes.is_trial &&
    body.data.billing_contact_attributes.state &&
    body.data.billing_contact_attributes.country
  ).reply(200, createAccountSuccessResp)
}

export const createAccountFailureMock = () => {
  nock(/https/).post(
    '/api/v1/accounts/', matches(matcherDataLocal)
  ).reply(400, createAccountErrorResp)
}

export const createAccountBcSetupNodeSuccessMock = () => {
  nock(/https/)
    .matchHeader('accept', 'application/json, text/plain, */*')
    .post('/api/v1/accounts/', matches(matcherDataLocal))
    .reply(200, {
      id: 1
    })
}
