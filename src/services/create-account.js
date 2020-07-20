import faker from 'faker';
import StoreSetupService from 'bc-store-setup-node';
import Globals from './../global-constants';
import AccountData from '../../test/fixtures/account-data';

function _buildCreateAccountPayload(email) {
  const contactAttributes = {
    first_name: faker.name.firstName,
    last_name: faker.name.lastName,
    email_address: email,
    street_address_1: faker.address.streetAddress,
    city: faker.address.city,
    state: faker.address.state,
    postal_code: faker.address.postalCode,
    phone_country_code: faker.address.phoneCountryCode,
    phone_number: faker.address.phoneNumber,
    country: 'US'
  };
  return JSON.stringify({
    data: {
      email_address: email,
      first_name: contactAttributes.first_name,
      last_name: contactAttributes.last_name,
      company_name: faker.company.companyName,
      password: Globals.TEST_USER_PASSWORD,
      primary_contact_attributes: contactAttributes,
      billing_contact_attributes: contactAttributes
    }
  });
}

export async function createAccount(email) {
  console.log(`\nCreating an account with email and password: ${email} and ${AccountData.password}`);
  const createAccountPayload = _buildCreateAccountPayload(email);
  try {
    const store = new StoreSetupService(Globals.BMP_HOST, Globals.CLIENT_ID, Globals.CLIENT_SECRET);
    return await store.createAccount(createAccountPayload);
  } catch {
    const message = `Account creation failed for ${email}!`;
    console.log(message);
    throw message;
  }
}
