const freshworks_HomePage = require('../Pages/freshworks_HomePage');         // imported freshworks_HomePage from pages folder

describe('home page elements handle', () => {
    
    beforeAll( () =>{
        browser.waitForAngularEnabled(false);    
    } )

    it('verify home page elements', () => {
        browser.get('https://www.freshworks.com/');

        freshworks_HomePage.pageHeader.getText().then( (textToPrint) => {
            console.log(textToPrint);      
        } );

        freshworks_HomePage.subHeader.getText().then( (textToPrint) => {
            console.log(textToPrint);      
        } );

        freshworks_HomePage.supportLink.click();
        browser.pause(5000);
    } );
} );