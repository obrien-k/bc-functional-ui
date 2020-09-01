import StoreSetupService from 'bc-store-setup-node';
import { BMP_HOST, STORE_CREATION_TIMEOUT, API_RETRY_TIME, TEST_USER_PASSWORD } from '../global-constants';

let requestId = 123;

function _buildStoreProvisioningPayload(account) {
    return JSON.stringify({
        data: {
            sku: "STORE-LAUNCHBAY",
            account_id: account.data.id,
            options: {
                store: {
                    store_name: account.data.company_name,
                    email: account.data.email_address,
                    full_name: account.data.company_name,
                    country: "US",
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
        }
    });
}

async function pollForFulfilledProvisioningRequest(requestId, account) {
    const startTime = new Date().getTime();
    let retry = 0;
    let provisioningResponse = {data: {data: {workflow_state: 'not fulfilled'}}};
    console.log('Checking if the store is created...\n');
    do {
        const elapsedTime = (new Date().getTime()) - startTime;
        if (elapsedTime > retry) {
            console.log('\n...');
            provisioningResponse = await getStore(requestId, account);
            retry += API_RETRY_TIME;
        } else if (retry > STORE_CREATION_TIMEOUT) {
            const errorMessage = `Provisioning failed to create store within ${STORE_CREATION_TIMEOUT} seconds`;
            console.log(errorMessage);
            throw errorMessage;
        }
    } while (provisioningResponse.data.workflow_state !== 'fulfilled');
    console.log('******************** Store provisioning is complete ********************\n');
    console.log(`Store primary hostname: ${provisioningResponse.data.services[0].primary_hostname}`);
    console.log(`Store current status: ${provisioningResponse.data.services[0].current_state}`);
    console.log(`Integration login url: ${BMP_HOST}`);
    console.log(`Account user email: ${account.data.email_address}`);
    console.log(`Account password: ${TEST_USER_PASSWORD}`);
    console.log('************************************************************************\n');
    console.log('.... account final details ' + JSON.stringify(account));

    /**
     * TODO fix this
     */
    /* account.store.url = `https://${provisioningResponse.data.services[0].canonical_hostname}`;
    console.log(`Store canonical url: ${account.data.store.url}`); */
    return account;
}

async function createStore(account) {
    try {
        console.log(`\nCreating a store with the following account details: \n ${account.data.company_name}`);
        const createStoreProvisioningPayload = _buildStoreProvisioningPayload(account);
        const storeSetupService = new StoreSetupService(BMP_HOST, account.data.email_address, account.data.auth_token);
        requestId = await storeSetupService.createStore(account.data.email_address, account.data.auth_token, createStoreProvisioningPayload);
        return await pollForFulfilledProvisioningRequest(requestId.data.id, account);
    } catch(error) {
        let errorMessage = `Store provisioning failed for email ${account.data.email_address}`;
        console.log(error);
        throw errorMessage;
    }
}

async function getStore(requestId, account) {
    try {
        const storeSetupService = new StoreSetupService(BMP_HOST, account.data.email_address, account.data.auth_token);
        return storeSetupService.getStore(requestId);
    } catch(error) {
        let errorMessage = `Could not retrieve store details for ${requestId}`;
        console.log(error);
        throw errorMessage;
    }
}

module.exports = {
    createStore,
    getStore
};
