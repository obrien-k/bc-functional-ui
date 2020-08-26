import faker from 'faker';
import StoreSetupService from 'bc-store-setup-node';
import Globals from './../global-constants';

function _buildCreateAccountPayload(emailAddr) {
  const contactAttributes = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email_address: emailAddr,
    street_address_1: '211 E 7th Street',
    city: 'Austin',
    state: 'TX',
    postal_code: '78701',
    phone_country_code: '1',
    phone_number: '8181818181',
    country: 'US'
  };

  return JSON.stringify({
    data: {
      email_address: contactAttributes.email_address,
      first_name: contactAttributes.first_name,
      last_name: contactAttributes.lastName,
      company_name: faker.company.companyName(),
      password: Globals.TEST_USER_PASSWORD,
      primary_contact_attributes: contactAttributes,
      billing_contact_attributes: contactAttributes,
    },
  });
}

function _buildCreateTrialAccountPayload(emailAddr) {
  const contactAttributes = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email_address: emailAddr,
    is_trial: 1,
    state: 'TX',
    country: 'US'
  };

  return JSON.stringify({
    data: {
      email_address: emailAddr,
      company_name: faker.company.companyName(),
      password: Globals.TEST_USER_PASSWORD,
      primary_contact_attributes: contactAttributes,
      billing_contact_attributes: contactAttributes,
    },
  });
}

async function createAccount(emailAddr, type) {
  console.log(`\nCreating an account with email : ${emailAddr}`);
  const createAccountPayload = (type === 'non-trial' ? _buildCreateAccountPayload(emailAddr) : _buildCreateTrialAccountPayload(emailAddr));
  try {
    const store = new StoreSetupService(Globals.BMP_HOST, Globals.CLIENT_ID, Globals.CLIENT_SECRET);
    return await store.createAccount(createAccountPayload);
  } catch(error) {
    const message = `Account creation failed for ${emailAddr}!`;
    console.log(message);
    throw message;
  }
}

module.exports = createAccount;
