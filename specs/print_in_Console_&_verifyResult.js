describe('print & verify a result', () =>{

    let result;

    beforeAll( () =>{
        browser.waitForAngularEnabled(false);
    } );

    beforeEach( () => {
        browser.get('https://juliemr.github.io/protractor-demo/');    
        result = element(by.className('ng-binding') );

        // result = element(by.cssContainingText('.ng-binding', 4) )
    } );   

    // TC1: performing division operation, print the result in console & verifying the result using expect.
    it('perform division of two numbers', () => {
        browser.get('https://juliemr.github.io/protractor-demo/'); 

        const firstNo = element(by.model('first') );
        const divOperator = element(by.model('operator') ).$('[value="DIVISION"]' );           // selecting value inside model operator using $
        const secondNo = element(by.model('second') );
        const goButton = $('[ng-click="doAddition()"]');            // using $ to store css

        firstNo.sendKeys(20);               // no quotes required simple number also accepted
        divOperator.click();
        secondNo.sendKeys(5);
        goButton.click();
        
        browser.sleep(3000);
        
    //    console.log('The division result is: ' + (result.getText() ));      // simple getText() fn will return promises and print [object Object],


        // hence in order to get correct value we have to resolve that promise
        result.getText().then( (value) => {
            console.log('The division result is: ' + value);
        } ); 

        expect(result.getText() ).toEqual('4');
    } );

     
 // console.log('The division result is: ' + result.getAttribute('value') );

} );