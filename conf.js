//below code is required if we need to keep selenium server up & running always but i commented it intentionally
/* exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec1.js']
  }; */

  // An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['specs/*spec_Ex1.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
