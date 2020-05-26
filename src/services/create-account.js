const AccountData = require('../config/data/account-data');
const ACCOUNTS_ENDPOINT = 'api/v1/accounts/';
const StoreSetupService = require('bc-store-setup-node');
const { Globals } = inject();
const container = require('codeceptjs').container;

let dateTime = new Date();
let timeStamp = dateTime.getDate().toString() + dateTime.getHours().toString() + dateTime.getMinutes();
let testTitle = 'basicTest';

module.exports = function() {

    return actor({

        _buildCreateAccountPayload() {
            const contactAttributes = {
                "first_name": AccountData.firstName,
                "last_name": AccountData.lastName,
                "email_address": testTitle + `-${timeStamp}@bigcommerce.com`,
                "street_address_1": AccountData.streetAddress.Address,
                "city": AccountData.streetAddress.city,
                "state": AccountData.streetAddress.state,
                "postal_code": AccountData.streetAddress.postalCode,
                "phone_country_code": AccountData.streetAddress.phoneCountryCode,
                "phone_number": AccountData.streetAddress.phoneNumber,
                "country": AccountData.streetAddress.country
            };
            return JSON.stringify({
                "data": {
                    "email_address": testTitle + `-${timeStamp}@bigcommerce.com`,
                    "first_name": AccountData.firstName,
                    "last_name": AccountData.lastName,
                    "company_name": AccountData.companyName,
                    "password": AccountData.password,
                    "primary_contact_attributes": contactAttributes,
                    "billing_contact_attributes": contactAttributes
                }
            });
        },

        _buildCreateTrialAccountPayload() {
            const contactAttributes = {
                "first_name": AccountData.firstName,
                "last_name": AccountData.lastName,
                "email_address": testTitle + `-${timeStamp}@bigcommerce.com`,
                "is_trial" : 1,
                "state": AccountData.streetAddress.state,
                "country": AccountData.streetAddress.country
            };
            return JSON.stringify({
                "data": {
                    "email_address": testTitle + `-${timeStamp}@bigcommerce.com`,
                    "company_name": AccountData.companyName,
                    "password": AccountData.password,
                    "primary_contact_attributes": contactAttributes,
                    "billing_contact_attributes": contactAttributes
                }
            });
        },

        _buildHeaders() {
            return {
                'Content-Type': 'application/json',
                'Authorization': "Basic " + Buffer.from(Globals.clientId + ':' +  Globals.clientSecret).toString('base64')
            }
        },

        async createAccount(type) {
            testTitle = container.helpers('WebDriver').testName;
            console.log(`\nCreating an account with email and password: ${testTitle + `-${timeStamp}@bigcommerce.com`} and ${AccountData.password}`);
            const create_account_payload = (type === 'non-trial' ? this._buildCreateAccountPayload() : this._buildCreateTrialAccountPayload());
            try {
                if (type === 'non-trial') {
                    const store = new StoreSetupService(Globals.HOST, Globals.clientId, Globals.clientSecret);
                    return await store.createAccount(create_account_payload);
                } else {
                    /**
                     * This branching is added to test the codeceptjs post call works as expected
                     */
                    return await this.sendPostRequest(ACCOUNTS_ENDPOINT, create_account_payload, this._buildHeaders());
                }
            } catch(error) {
                console.log(`Account creation failed for ${testTitle + `-${timeStamp}@bigcommerce.com`}!`);
                return error;
            }
        }

    });
};
