// in this file you can append custom step methods to 'I' object
require('@babel/register')({
  extends: './.babelrc',
  ignore: [/node_modules/],
  extensions: ['.js']
});

module.exports = function() {
  return actor({

    clearTextField(locator) {
      this.click(locator);
      this.pressKey(['Shift', 'Home']);
      this.pressKey('Backspace');
    },

    replaceTextField(fieldName) {
      this.appendField(fieldName, '');
      this.pressKey(['Shift', 'Home']);
      this.pressKey('Backspace');
    },

    isElementVisible(selector) {
      return !this.dontSeeElement(selector);
    },

  });
};
