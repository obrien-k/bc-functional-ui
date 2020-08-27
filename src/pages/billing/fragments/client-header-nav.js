const { I } = inject();

module.exports = {

    root: '#header',

    topNavBar: {
        accountDropdown: "//a[text()='Account']",
        domainsLink: "//a[contains(text(),'Domains')]",
        sslCertificatesLink: "//a[contains(text(),'SSL Certificates')]",
        emailLink: "//a[contains(text(),'Email')]",
        upgradeButton: "//a[contains(text(),'Upgrade')]",
        supportPin: "//li[contains(text(),'Your Support PIN')]//span",
        helpCenterLink: "//a[contains(text(),'Help Center')]",
        logOutButton: "#logout-button"
    },
    accountDropdown: {
        overviewLink: "//a[contains(text(),'Overview')]",
        storeInfoLink: "//a[contains(text(),'Store details')]",
        invoicesLink: "//a[contains(text(),'Invoices')]",
        billingLink: "//a[contains(text(),'Payment method')]",
        accountDetailsLink: "//a[contains(text(),'Account details')]",
        logOutLink: "//a[contains(text(),'Log out')]",
    },

    navigateTo(page) {
        I.click(`//a[contains(text(), '${page}')]`);
    },

    navigateToAccountOptions(page) {
        I.click(this.topNavBar.accountDropdown);
        I.click(`//a[contains(text(), '${page}')]`);
    },

    logout() {
        I.click(this.topNavBar.logOutButton);
    }
};
