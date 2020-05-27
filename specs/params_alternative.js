/* the objective of this test/spec is to make use of test data inside a .ts file as global parameters instead of using params inside conf.js which makes debugging often difficult          */

// const apGbl = require('../testData/appGlobals_(qavbox)');     // have commented this here as i have added params code inside onprepare() fn in conf.js file

describe('testing qavbox video on Protractor global params and access params from a ts file', () => { 

    it('print the global appGlobals ts file parameters', async () => { 
        console.log('Reading the appGlobals ts file params section\n');
        console.log('Fetching the 1st key value:', browser.apGbl.appUrl);       // prints "http://way2automation.com/angularjs-protractor/banking/#/login"
        
        // creating a variable for the customers array
        const cmrArr = browser.apGbl.malangCustomers;
        console.log('Printing each elements of malangCustomers array:\n', cmrArr, '\n');                  // prints the entire malangCustomers array

        for(const elem of cmrArr){
            console.log(elem);          // will print malangCustomers[0] then each element of 0th index, then malangCustomers[1] then each element of 1st index
            console.log(elem.firstName);
            console.log(elem.lastName);
            console.log(elem.postCode, '\n');   
        }
    } );                    // it block closed

} );                // describe block closed






