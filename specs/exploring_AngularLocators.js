describe('exploring Angular Locators', () => {
    
    const ec = protractor.ExpectedConditions;
    beforeEach( () => {
        browser.get('https://juliemr.github.io/protractor-demo/');    
    } );   

    // TC1: identifying locators and performing the multiplication operation
    it('perform multiplication of two numbers', () => {
        const firstNo = element(by.model('first') ),
        mulOperator = element(by.model('operator') ).$('[value="MULTIPLICATION"]' ),           // selecting value inside model operator using $
        
        secondNo = element(by.model('second') );
        goButton = $('[ng-click="doAddition()"]'),            // using $ to store css
        elementToWait = element(by.className('ng-binding') );

        firstNo.sendKeys(10);                       // no single or double quotes required simple number also accepted
        mulOperator.click();
        secondNo.sendKeys(2);
        goButton.click();
        
        // browser.sleep(3000);                 // instead of using sleep i wrote explicit wait code below.
        browser.wait(ec.presenceOf(elementToWait), 4000);
    } );

} );