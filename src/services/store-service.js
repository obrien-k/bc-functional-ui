import StoreSetupService from 'bc-store-setup-node';
import { BMP_HOST,
    CLIENT_ID,
    CLIENT_SECRET,
    STORE_CREATION_TIMEOUT,
    API_RETRY_TIME
} from '../global-constants';

let requestId = 123;

function _buildStoreProvisioningPayload(account) {
    return JSON.stringify({
        "data": {
            "sku": "STORE-LAUNCHBAY",
            "account_id": account.account_id,
            "options": {
                "store": {
                    "store_name": account.store.store_name,
                    "email": account.store.email,
                    "full_name": account.store.full_name,
                    "country": account.store.country,
                    "referral_id": "",
                    "service_analytics_attributes": {
                        "industry": "Books/Music/Video",
                        "coupon_code": "null",
                        "marketing_segment": "Goods and services",
                        "segment": "Goods and services",
                        "form_page": "/",
                        "promotion": "",
                        "landing_page": "/",
                        "visitor_id": "1234567890",
                        "source": "(direct)"
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
    console.log('Checking if the store is created...');
    do {
        const elapsedTime = (new Date().getTime()) - startTime;
        if (elapsedTime > retry) {
            console.log('\n...');
            provisioningResponse = await getStore(requestId);
            retry += API_RETRY_TIME;
        } else if (retry > STORE_CREATION_TIMEOUT) {
            const errorMessage = `Provisioning failed to create store within ${STORE_CREATION_TIMEOUT} seconds`;
            console.log(errorMessage);
            throw errorMessage;
        }
    } while (provisioningResponse.data.data.workflow_state !== 'fulfilled');
    account.store.url = `https://${provisioningResponse.data.data.services[0].primary_hostname}`;
    account.store.authToken = requestId;
    console.log(`Store is created: ${account.store.url}`);
    return account;
}

export async function createStore(account) {
    try {
        console.log(`\nCreating a store with the following account details: \n ${account.store.store_name}`);
        const createStoreProvisioningPayload = _buildStoreProvisioningPayload(account);
        const storeSetupService = new StoreSetupService(BMP_HOST, CLIENT_ID, CLIENT_SECRET);
        requestId = await storeSetupService.createStore(CLIENT_ID, CLIENT_SECRET, createStoreProvisioningPayload);
        return await pollForFulfilledProvisioningRequest(requestId, account);
    } catch {
        let errorMessage = `Store provisioning failed for email ${account.store.email}`;
        console.log(errorMessage);
        throw errorMessage;
    }
}

export async function getStore(storeId) {
    try {
        const storeSetupService = new StoreSetupService(BMP_HOST, CLIENT_ID, CLIENT_SECRET);
        return storeSetupService.getStore(storeId);
    } catch {
        let errorMessage = `Could not retrieve store details for ${storeId}`;
        console.log(errorMessage);
        throw errorMessage;
    }
}
