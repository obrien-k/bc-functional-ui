const { I } = inject();

module.exports = {
    selectors: {
        storeNameField: 'div.bui-panel.store-name-panel',
        upgradeButton: '.subscription-upgrade',
        subscriptionLabel: '.subscription-plan',
        invoicesLink: '.subscription-actions > a:nth-child(1)',
        logoutLink: '#logout-button'
    },

    logout() {
        I.click(this.selectors.logoutLink);
    }
};
