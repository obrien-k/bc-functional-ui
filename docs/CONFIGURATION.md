# Configuration

CodeceptJS configuration is set in `codeceptjs.conf.js` file which is located in the root
directory of this project.
<br/><br/>
Here is an overview of the configuration we have setup:
* __tests__: `./tests/*_test.js` - pattern to locate tests
* __output__: `./logs` - location to store failure screenshots 
* __helpers__: `{}` - contains a list of enabled helpers
* __Webdriver__: `{}` - contains webdriver configuration
* __include__: `{}` - actors and page objects to be registered in DI container and 
included in tests. Accepts objects and module require paths
* __bootstrap__: `./bootstrap.js` - an option to run code before tests are run.
* __mocha__: `{}` - mocha options
* __plugins__: `{}` - contains a list of configurable plugins supported by codeceptjs

### Learn more about CodeceptJS configuration

[CodeceptJS Configration](https://codecept.io/basics/#configuration)
