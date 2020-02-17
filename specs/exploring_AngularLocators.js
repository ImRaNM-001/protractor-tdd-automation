describe('exploring Angular Locators', () => {
    const eC = protractor.ExpectedConditions;
    // beforeAll( () =>{
    //     browser.waitForAngularEnabled(false);
    // } );

    beforeEach( () => {
        browser.get('https://juliemr.github.io/protractor-demo/');    
    } );   

    // TC1: identifying locators and performing the multiplication operation
    it('perform multiplication of two numbers', () => {
        const firstNo = element(by.model('first') );
        const mulOperator = element(by.model('operator') ).$('[value="MULTIPLICATION"]' );           // selecting value inside model operator using $
        const secondNo = element(by.model('second') );
        const goButton = $('[ng-click="doAddition()"]');            // using $ to store css

        firstNo.sendKeys(10);                       // no quotes required simple number also accepted
        mulOperator.click();
        secondNo.sendKeys(2);
        goButton.click();
        
        // browser.sleep(3000);                 // instead of using sleep i wrote explicit wait code below.
        browser.wait(eC.presenceOf(element(by.className('ng-binding'))), 4000);

    } );
} );