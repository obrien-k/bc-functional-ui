import nock from 'nock';
import StoreData from '../fixtures/store-data';

const getStoreRequestPathRegEx = /\/api\/v1\/provisioning_requests\/*/;

export const createStoreSuccessResp = {
    account_id: StoreData.account_id,
    store_name: StoreData.store.store_name,
    requestId: 123
};

export const getStoreSuccessResp = {
    data: {
        data: {
            workflow_state: 'fulfilled',
            services: [
                {primary_hostname: 'su19460'}
            ],
        }
    }
};

export const createStoreFailureResp = {
    errorMessage: 'Store creation failed'
};

export const getStoreFailureResp = {
    errorMessage: 'Store creation failed'
};

export const createStoreProvisioningFailureMock = () => {
    nock(/https/).post(
        '/api/v1/provisioning_requests/'
    ).reply(400, createStoreFailureResp)
};

export const createStoreProvisioningSuccessMock = () => {
    nock(/https/)
        .post('/api/v1/provisioning_requests/')
        .reply(200, createStoreSuccessResp);
};

export const getStoreSuccessMock = () => {
    nock(/https/)
        .get(getStoreRequestPathRegEx)
        .reply(200, getStoreSuccessResp)
};

export const getStoreFailureMock = () => {
    nock(/https/)
        .get(getStoreRequestPathRegEx)
        .reply(400, getStoreFailureResp)
};
