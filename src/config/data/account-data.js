const faker = require('faker');
const event = require('codeceptjs').event;
const container = require('codeceptjs').container;

let testFileName = 'auto-email';

function extractAndContainTestFileName() {
    event.dispatcher.on(event.test.started, function (test) {
        let index = test.file.lastIndexOf('/');
        testFileName = test.file.substr(index).replace('/', '').replace('.js', '');
        container.helpers('WebDriver').testName = testFileName;
    });
}

module.exports = Object.freeze({
    testFileName: extractAndContainTestFileName(),
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
