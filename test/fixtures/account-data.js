import faker from 'faker';
import Globals from './../../src/global-constants';

module.exports = Object.freeze({
  password: faker.internet.password(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  companyName: faker.company.companyName(),
  streetAddress: {
    Address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postalCode: faker.address.zipCode(),
    country: 'US',
    phoneCountryCode: faker.address.countryCode(),
    phoneNumber: faker.phone.phoneNumber(),
  },
});


module.exports = Object.freeze({
  password: Globals.TEST_USER_PASSWORD,
  firstName: 'Clark',
  lastName: 'Kent',
  companyName: 'Daily Planet',
  streetAddress: {
    Address: '1000 Broadway',
    city: 'Metropolis',
    state: 'Kansas',
    postalCode: '54321',
    country: 'US',
    phoneCountryCode: '1',
    phoneNumber: '5557873762'
  }
});
