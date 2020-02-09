//below code is required if we need to keep selenium server up & running always but i commented it intentionally
/* exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec1.js']
  }; */

  // An example configuration file, directConnect: true doesn't need need selenium server to be up & running and takes chrome browser by default
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // incase need to another browser store in an object named multiCapabilities like below
  // multiCapabilities: [
  //   {browserName: 'firefox'}, 
  //   {browserName: 'chrome'}
  // ]

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  // specs: ['specs/*spec_Ex1.js'],
  specs: ['./specs/print_in_Console_&_verifyResult.js'],


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: () => {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }
};          // ending exports.config
