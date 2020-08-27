const { I, bmpClientHeaderNav } = inject();

module.exports = {

    root: '#content',
    storeNameField: 'div.bui-panel.store-name-panel',
    storesPanel: {
        subscriptionLabel: '.subscription-plan',
    },
    primaryContactPanel: {
        updateAccountDetailsLink: "//a[contains(text(),'Update account details')]",
        updateBillingDetailsLink: "//a[contains(text(),'Update billing details')]",
    }
};
