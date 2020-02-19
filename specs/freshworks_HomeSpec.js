const freshworks_HomePage = require('../Pages/freshworks_HomePage');         // imported freshworks_HomePage from pages folder

describe('home page elements handle', () => {
    
    beforeAll( () =>{
        browser.waitForAngularEnabled(false);    
    } )

    // TC1
    it('verify home page elements', () => {
        browser.get('https://www.freshworks.com/');

        freshworks_HomePage.pageHeader.getText().then(textToPrint => {
            console.log('The main header text is: '+ textToPrint);      
        } );

        freshworks_HomePage.subHeader.getText().then(textToPrint => {
            console.log('The sub header text is: ' + textToPrint);      
        } );

        freshworks_HomePage.supportLink.click();
        browser.sleep(3000);

    } );


} );