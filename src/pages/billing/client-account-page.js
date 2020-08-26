const { I } = inject();

module.exports = {
    accountInformationPanel: {
        root: '',
        companyName: '//li/strong[contains(text(),"Company Name")]/../span',
        editButton: 'a[href="/account/edit"]'
    },

    infoMessages: {
        accountSuccessfullyUpdated: 'Your account was successfully updated'
    },

    openEditAccountForm() {
        I.click(this.accountInformationPanel.editButton);
    }
};
