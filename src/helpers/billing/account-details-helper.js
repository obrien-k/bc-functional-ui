const { I, bmpClientAccountPage, bmpClientEditAccountPage } = inject();

module.exports = {

    editAccountInformation(newCompanyName) {
        bmpClientAccountPage.openEditAccountForm();
        bmpClientEditAccountPage.changeCompanyName(newCompanyName);
        I.see(bmpClientAccountPage.infoMessages.accountSuccessfullyUpdated);
    }
};
