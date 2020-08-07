/* In this file you can modify global Bootstrap and teardown methods
   These get executed before spec files, and after spec files. */

module.exports = {
  bootstrapAll: function(done) {
    //Some setup code before all the tests files to be run in parallel are run
    console.log('Running Bootstrap All');
    done()
  },
  teardownAll: function(done) {
    //Some teardown code after all the tests files to be run in parallel are run
    console.log('Running Teardown All');
    done()
  },
  bootstrap: function(done) {
    //Some setup code before each test file
    console.log('Running Bootstrap');
    done()
  },
  teardown: function(done) {
    //Some teardown code after each test file
    console.log('Running Teardown');
    done()
  },
};
