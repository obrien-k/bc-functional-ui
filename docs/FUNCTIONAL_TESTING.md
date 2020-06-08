## Introduction

Main purpose of this repo is to serve as a testing library within BC for being able
to write UI tests outside of BC APP function test suite. This library is just another
tool to be able to write end-to-end or functional tests using underlying **CodeceptJS**
testing framework. Feature specs should be written outside this repo and the tests here
are only for testing the utils added here. 

Most of the best practices laid down here are something all of us are familiar with and
similar to what we have in Bc App functional tests. 

## Folder structure you will see in this repo

    .
    ├── README.md
    ├── codecept.conf.js
    ├── jsconfig.json
    ├── logs
    ├── package.json
    ├── steps.d.ts
    ├── steps_file.js
    ├── docs
    │   ├── ABOUT_CODECEPTJS.md
    │   ├── CONFIGURATION.md
    │   ├── FUNCTIONAL_TESTING.md
    │   └── images
    │       └── image files
    ├── src
    │   ├── helpers
    │   │   └── helper files
    │   ├── pages
    │   │   ├── page objects
    │   └── services
    │       └── create-account.js
    └── test
        └── tests


## Page Objects & helpers
UI locators for tests can be reused across different tests of our application and so
to avoid duplicating them we need to have page objects defined. Tests need to define page
objects and use them within tests instead of using of using locators within tests.

Wherever we see more than a simple use case of interaction for the tests 
which can be shared across multiple tests they should be defined as helpers. This will
help us avoid code duplication and help us organize locators and helpers. In codeceptJS
world these are referred to as __stepObjects__ 

All objects defined under __pages__ && __helpers__ are injected with Dependency Injection
in `codecept.conf.js` configuration file within `include: {}`

From the official documentation: *StepObjects represent complex actions which 
involve usage of multiple web pages. For instance, creating users in backend, 
changing permissions, etc*

Learn more about 
<br/>[Step Objects](https://codecept.io/pageobjects/#stepobjects)
<br/>[Page Objects](https://codecept.io/pageobjects/#pageobject)

## Locators
CodeceptJS has flexible strategies for locating elements and
preferred way of defining our selectors.
* CSS and XPath locators
* Semantic locators: by link text, by button text, by field names, etc.
* Locator Builder
* ID locators: by CSS id or by accessibility id
* Custom Locator Strategies: by data attributes or whatever you prefer.
* Shadow DOM: to access shadow dom elements
* React: to access React elements by component names and props

__Most methods in CodeceptJS use locators which can be 
either a string or an object.__

Read more to define your own way of using selectors
<br/>[CodeceptJS Locators](https://codecept.io/locators/#css-and-xpath)

## Test Setup
### To Do

## Test Teardown
### To Do
