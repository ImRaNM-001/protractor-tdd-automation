describe('print & verify a result', () =>{

    let result;

    beforeAll(function() {
        browser.waitForAngularEnabled(false);
    } );

    beforeEach(function() {
        browser.get('https://juliemr.github.io/protractor-demo/');    
        result = element(by.className('ng-binding') );
        // result = element(by.cssContainingText('.ng-binding', 4) )
    } );   

    // TC1: performing division operation
    it('perform division of two numbers', () => {
        const firstNo = element(by.model('first') );
        const divOperator = element(by.model('operator') ).$('[value="DIVISION"]' );           // selecting value inside model operator using $
        const secondNo = element(by.model('second') );
        const goButton = $('[ng-click="doAddition()"]');            // using $ to store css

        firstNo.sendKeys(20);               // no quotes required simple number also accepted
        divOperator.click();
        secondNo.sendKeys(5);
        goButton.click();
        browser.sleep(6000);
    } );

    // TC2: print the result in console
    it('print the div result in console', async function() {
    //    console.log('The division result is: ' + (result.getText() ));               // simple getText() fn will return promises and print [object Object], hence in order to get correct value we have to resolve that promise
       
       await result.getText().then( (value) => {
           console.log('The division result is: ' + value);
       } );       
        // console.log('The division result is: ' + result.getAttribute('value') );
    } );
    
   // TC3: verifying the result using expect
   it('verifying the result',  function() {
         expect(result.getText() ).toEqual(4);
        // browser.sleep(6000);
   } );





} );