import {
    createStoreProvisioningFailureMock,
    createStoreProvisioningSuccessMock,
    getStoreSuccessMock,
    getStoreSuccessResp,
    getStoreFailureMock
} from '../mocks/store-service-mocks';
import { createStore, getStore } from '../../src/services/store-service';
import { storeData, accountData } from '../fixtures/store-data';
import * as nock from "nock";

require('regenerator-runtime');

afterEach(() => {
    nock.cleanAll();
});


describe('Store service tests', () => {

    /**
     * TODO: createStore request creates a requestId object that is
     * passed in to pollForFulfilledProvisioningRequest
     *
     * Need to find a way how do we inject that. Doesn't feel like
     * a unit test. We have the same test devoid mocks in example
     * spec
     */
    it.skip('successful store creation', async() => {
        createStoreProvisioningSuccessMock();
        getStoreSuccessMock();
        const res = await createStore(accountData);
        expect(res).toEqual(storeData);
    });

    it('failure during setup', async() => {
        createStoreProvisioningFailureMock();
        getStoreFailureMock();
        try {
            await createStore(accountData);
        } catch(e) {
            expect(e).toEqual(`Store provisioning failed for email ${accountData.data.email_address}`);
        }
    });

    it('Get store details', async() => {
        getStoreSuccessMock();
        const res = await getStore(123, accountData);
        expect(res).toMatchObject(getStoreSuccessResp);
    });
});
