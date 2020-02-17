const blazemeter_HomePage = require ('../pages/blazemeter_HomePage');

describe('blazemeter elements handle', () => {

    beforeAll( () => {
        browser.waitForAngularEnabled(false);
    } );

    it('get text for all Li links', () => {
        browser.get('https://www.blazemeter.com/');
        blazemeter_HomePage.textForLi;
        blazemeter_HomePage.textOf_useCasesElements;
    } );

    
    it('get text for a specific Li link', () => {
        browser.get('https://www.blazemeter.com/');
        blazemeter_HomePage.specificChildElement(2).getText().then( (elementToPrint) => {
            console.log('The desired element getting printed here is: ' ,
                                                                            elementToPrint);            
        } );
    } );


    it('main heading Displayed?', () => {
        browser.get('https://www.blazemeter.com/');
        // console.log(blazemeter_HomePage.mainHeader.isDisplayed() );         // again works for WDIO but not for protractor, resolve using promise
        blazemeter_HomePage.mainHeader.isDisplayed().then( (result) => {
            console.log('The header is displayed in the page: ', result);            
        } );
    } );


    it('main heading Enabled?', () => {                    // useful for scenarios to check if submit button enabled or not
        browser.get('https://www.blazemeter.com/');
        blazemeter_HomePage.mainHeader.isEnabled().then( (result) => {
            console.log('The header is enabled in the page: ', result);            
        } );
    } );


    it('main heading Present or Existing?', () => {                    // useful for scenarios when element available in DOM but not in webpage, Note: unlike WDIO, there is no isExisting() in protractor, there is isPresent() which serves the same purpose.
        browser.get('https://www.blazemeter.com/');
        blazemeter_HomePage.mainHeader.isPresent().then( (result) => {
            console.log('The header is present in the page: ', result);            
        } );
    } );


    fit('click on start Testing Now link ', () => {              
        browser.get('https://www.blazemeter.com/');
        blazemeter_HomePage.clickon_startTestingNow_Link();   

        // browser.pause();                                // browser.pause is not working hence wrote code for explicitly wait
        const eC = protractor.ExpectedConditions;
        browser.wait(eC.visibilityOf($('div#kc-rs-logo')) , 16000);
        $('div#kc-rs-logo').click();
    } );

} );