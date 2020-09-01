import nock from 'nock';
import { storeData } from '../fixtures/store-data';

const getStoreRequestPathRegEx = /\/api\/v1\/provisioning_requests\/*/;

export const req_id = {
    data: {
        id: 123
    }
};

export const createStoreSuccessResp = {
    account_id: storeData.account_id,
    store_name: storeData.options.store.store_name,
    requestId: req_id
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
    const requestId = {
        data: {
            id: 123
        }
    };
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
