// old technique: ES5 way of writing function
/* describe('testing to hit a webPage', function(){
    it('open youtube homePage', function(){
        browser.get('http://www.youtube.com');
    });
}); */

// trying with fat arrow function
describe('test to open a webPage', () => {
    
    // TC1
    it('open Non-Angular page without waiting for angular', () => {
        // browser.get('https://www.youtube.com');          // this line of code will show failure spec unless application is angular, hence use browser.dirver.get

        browser.driver.get('https://www.youtube.com');       // this line of code will not fail the test        
        // browser.manage().window().maximize();             // added in conf.js inside onPrepare function (), hence commented here  
    } );

    // // TC2
    it('open Angular page and waiting for angular', () => {
        browser.get('https://angularjs.org/');                  // passes spec without driver instance since application is PURE angular
    } );

    // TC3
    xit('open Non-Angular page by ignoring Synchronization', () => {
        browser.ignoreSynchronization = true;
        browser.get('https://www.youtube.com');                  // passes spec without driver instance since Synchronization is set as true
    } );

    // TC4
    xit('open Non-Angular page by setting waitforAngular as false', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.youtube.com');                  // spec is passed without driver instance since waitForAngularEnabled is set as false
    } );
} );




/* Other ways to do it:
// Technique 1: add the below snippet in your .js spec file......
beforeAll(function() {
    browser.waitForAngularEnabled(false);
} );

// Technique 2: Add the following piece of code in the conf.js file.....
onPrepare: function () {
       browser.ignoreSynchronization = true;      
   }

// Technique 3: In some occasions, to avoid errors need to add both values..........
 browser.driver.ignoreSynchronization = true;
 browser.waitForAngularEnabled(false); 

*/



























