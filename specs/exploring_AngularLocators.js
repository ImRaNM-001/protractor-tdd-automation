describe('exploring Angular Locators', () =>{

    let result;

    beforeAll(function() {
        browser.waitForAngularEnabled(false);
    } );

    beforeEach(function() {
        browser.get('https://juliemr.github.io/protractor-demo/');    
        result = element(by.className('ng-binding') );
        // result = element(by.cssContainingText('.ng-binding', 4) )
    } );   

    // TC1: identifying locators and performing the multiplication operation
    it('perform multiplication of two numbers', () => {
        const firstNo = element(by.model('first') );
        const divOperator = element(by.model('operator') ).$('[value="MULTIPLICATION"]' );           // selecting value inside model operator using $
        const secondNo = element(by.model('second') );
        const goButton = $('[ng-click="doAddition()"]');            // using $ to store css

        firstNo.sendKeys(10);                       // no quotes required simple number also accepted
        divOperator.click();
        secondNo.sendKeys(2);
        goButton.click();
        
        browser.sleep(3000);
    } );
} );