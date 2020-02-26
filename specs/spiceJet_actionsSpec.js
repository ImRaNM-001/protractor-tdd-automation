const spiceJetPage = require('../pages/spiceJet_actionsPage');

describe('spice jet homepage actions', () => { 
    
    beforeAll( () => {
        browser.waitForAngularEnabled(false);
    } )

    it('moving to parent i.e, main menu Login/Signup link', () => {
        browser.get('https://www.spicejet.com/');
        // browser.actions().moveToElement(spiceJetPage.loginSignUp).click().perform();

        browser.actions().mouseMove(spiceJetPage.loginSignUp).click().perform();
        browser.actions().mouseMove(spiceJetPage.spiceClubMem).click().perform();
    
        browser.sleep(3000);
        
    } );
    

      
    
   




} );