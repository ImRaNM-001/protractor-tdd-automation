describe('exploring Angular Locators', () =>{

    let result;

    beforeAll( () =>{
        browser.waitForAngularEnabled(false);
    } );

    beforeEach( () =>{
        browser.get('https://juliemr.github.io/protractor-demo/');    
        result = element(by.className('ng-binding') );
    } );   

    // TC1: identifying locators and performing the multiplication operation
    it('perform multiplication of two numbers', () =>{
        const firstNo = element(by.model('first') );
        const mulOperator = element(by.model('operator') ).$('[value="MULTIPLICATION"]' );           // selecting value inside model operator using $
        const secondNo = element(by.model('second') );
        const goButton = $('[ng-click="doAddition()"]');            // using $ to store css

        firstNo.sendKeys(10);                       // no quotes required simple number also accepted
        mulOperator.click();
        secondNo.sendKeys(2);
        goButton.click();
        
        browser.sleep(3000);
    } );
} );