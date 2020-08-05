import {
    createStoreProvisioningFailureMock,
    createStoreProvisioningSuccessMock,
    getStoreSuccessMock,
    getStoreSuccessResp,
    getStoreFailureMock
} from '../mocks/store-service-mocks';
import { createStore, getStore } from '../../src/services/store-service';
import StoreData from '../fixtures/store-data';
import * as nock from "nock";

require('regenerator-runtime');

afterEach(() => {
    nock.cleanAll();
});

describe('Store service tests', () => {

    it('successful store creation', async() => {
        createStoreProvisioningSuccessMock();
        getStoreSuccessMock();
        const res = await createStore(StoreData);
        expect(res).toEqual(StoreData);
    });

    it('failure during setup', async() => {
        createStoreProvisioningFailureMock();
        getStoreFailureMock();
        try {
            await createStore(StoreData);
        } catch(e) {
            expect(e).toEqual(`Store provisioning failed for email ${StoreData.store.email}`);
        }
    });

    it('Get store details', async() => {
        getStoreSuccessMock();
        const res = await getStore(123);
        expect(res).toMatchObject(getStoreSuccessResp);
    });
});
