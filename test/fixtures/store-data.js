import { internet, name, company, random } from 'faker';
import Globals from "../../src/global-constants";

const storeData = Object.freeze({
    sku: "STORE-LAUNCHBAY",
    account_id: random.number(),
    options: {
        store: {
            store_name: company.companyName(),
            email: internet.email(),
            full_name: name.lastName(),
            country: 'US',
            referral_id: "",
            service_analytics_attributes: {
                industry: "Books/Music/Video",
                coupon_code: "null",
                marketing_segment: "Goods and services",
                segment: "Goods and services",
                form_page: "/",
                promotion: "",
                landing_page: "/",
                visitor_id: "1234567890",
                source: "(direct)"
            }
        }
    }
});

const accountData  = Object.freeze({
    data: {
        id: '1',
        password: Globals.TEST_USER_PASSWORD,
        firstName: 'Clark',
        lastName: 'Kent',
        company_name: 'Daily Planet',
        auth_token: 'text',
        email_address: 'dailyplanet@test.com',
        streetAddress: {
            Address: '1000 Broadway',
            city: 'Metropolis',
            state: 'Kansas',
            postalCode: '54321',
            country: 'US',
            phoneCountryCode: '1',
            phoneNumber: '5557873762'
        }
    },
    requestId: {
        data: {
            id: 123,
        }
    }

});

module.exports = {
    accountData,
    storeData
}
