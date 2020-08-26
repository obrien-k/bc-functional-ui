const { I } = inject();

module.exports = {
    companyNameField: '#account_company_name',
    saveButton: 'input[value="Save"]',
    cancelButton: '//a[contains(text(),"Cancel")]',

    changeCompanyName(newName) {
        I.clearField(this.companyNameField);
        I.fillField(this.companyNameField, newName);
        I.click(this.saveButton)
    }
};
