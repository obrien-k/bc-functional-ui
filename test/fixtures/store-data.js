import { internet, name, company, random } from 'faker';

module.exports = Object.freeze({
    sku: "STORE-LAUNCHBAY",
    account_id: random.number(),
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
});
