 // inserting code above exports.config = { for taking screenshots at failed specs only (not required as i am using protractor-html-reporter-2)

    // const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
    // const reporter = new HtmlScreenshotReporter({
    //   dest: 'screenshots',            // i trimmed the folder name from 'target/screenshots' to 'screenshots' only for my convenience
    //   filename: 'summaryReport.html',       // i renamed the filename from 'my-report.html' to 'summaryReport.html'
    //   captureOnlyFailedSpecs: true
    // } );

exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',   (// this code is required if we need to keep selenium server up & running always but i commented it intentionally)

  directConnect: true,

  // params: {
  // baseURL: 'https://angularjs.org/',
  // },

  // 1. Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    chrommeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800x600']
      // args: ['--headless']
    }
  },

  // 2. Incase need to store another browser in an object named multiCapabilities like below:
  // multiCapabilities: [
  //   {browserName: 'firefox'}, 
  //   {browserName: 'chrome'}
  // ]

  // 3. Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // 4. Spec patterns are relative to the current working directory when protractor is called.

  // specs: ['specs/*spec_Ex1.js'],
  specs: ['./specs/multipleScenarios.js'],

  // to run all specs 1 after 1 (non sequentially):
  // specs: ['specs/*'],

  // to run selected specs (in sequence):
// specs: ['specs/ignoringSynchronization.js',
// 'specs/exploring_AngularLocators.js',
// 'specs/print_in_Console_&_verifyResult.js'
// ],

  // 5. Options to be passed to Jasmine (i.e, declaring spec timeout).
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: () => {
    browser.manage().window().maximize();     // maximize the browser before executing the feature files
    browser.ignoreSynchronization = true;     // very much required in case of a non-angular application to avoid it being synchronous
     // browser.manage().timeouts().implicitlyWait(3000);
    // browser.manage().timeouts().setScriptTimeout(3000);          // represents webdriverJS asynchronous timeout

    // Assign the test summaryReport to each running instance
    // jasmine.getEnv().addReporter(reporter);      // won't be added as i would be using protractor-html-reporter-2

    
    // inserted below code to obtain results in xml file for satisfying bottom code new HTMLReport().from('xmlresults.xml', testConfig);
    const jasmineReporters = require('C:/testAutomationPractice/installationArea/Protractor/node_modules/jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter( {
        consolidateAll: true,
        savePath: './',
        filePrefix: 'xmlresults'
      } )
    );


    // inserted below code to take screenshot while using protractor-html-reporter-2
    const fs = require('C:/testAutomationPractice/installationArea/Protractor/node_modules/fs-extra');
 
    fs.emptyDir('screenshots/', (err => {
            console.log(err);
        } )
      );
 
    jasmine.getEnv().addReporter( {
        specDone: (result => {
            if (result.status == 'failed' || result.status == 'passed') {
                browser.getCapabilities().then(caps => {
                    let browserName = caps.get('browserName'); 
                    browser.takeScreenshot().then(png => {
                        const stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64') );
                        stream.end();
                    } );
                } );
            }
        } )
    } );
  
  

  },                                         // closing onPrepare() fn


  // 6. Setup the summaryReport before any tests start
  // beforeLaunch: () => {
  //   return new Promise(resolve => {
  //     reporter.beforeLaunch(resolve);
  //   } );

  // },


  
  // 7. Close the summaryReport after all tests finish
  // afterLaunch: (exitCode => {
  //   return new Promise(resolve =>{
  //     reporter.afterLaunch(resolve.bind(this, exitCode) );
  //   } );
  // } ),



  // 8. Calling HTMLReport once tests are finished
  onComplete: () => {
    let browserName, browserVersion;
    const capsPromise = browser.getCapabilities();

    capsPromise.then(caps => {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      const HTMLReport = require('C:/Users/imz_x/AppData/Roaming/npm/node_modules/protractor-html-reporter-2');

      testConfig = {
          reportTitle: 'Protractor Test Execution Report',
          outputPath: './',
          outputFilename: 'ProtractorTestReport',
          screenshotPath: './screenshots',
          testBrowser: browserName,
          browserVersion: browserVersion,
          modifiedSuiteName: false,
          screenshotsOnlyOnFailure: true,
          testPlatform: platform
      };

        new HTMLReport().from('xmlresults.xml', testConfig);
    } );


  },                                              // closing onComplete() fn












};                                          // ending exports.config
