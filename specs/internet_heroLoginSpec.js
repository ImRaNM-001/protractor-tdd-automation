const internet_heroLoginPage = require ('../pages/internet_heroLoginPage');

describe('perform herokuapp app login', () => {

    beforeAll( () => {
        browser.waitForAngularEnabled(false);
    } )

    // TC1
    it('enter username and perform assertion', () => { 
        browser.get('http://the-internet.herokuapp.com/login');

    // Or, browser.get(`${browser.options.baseUrl}/login`);     // taken from Naveen's WDIO video: part-9
        internet_heroLoginPage.enterUserName('tomsmith');
        expect(internet_heroLoginPage.enterUserName.getAttribute('value') ).toBe('tomsmith');
    } );


    // TC2
    it('enter password and perform assertion', () => { 
        internet_heroLoginPage.enterPassWord('SuperSecretPassword');
        expect(internet_heroLoginPage.enterPassWord.getAttribute('value') ).toBe('SuperSecretPassword!');
    } );


    // TC3
    it('click login button', () => { 
        internet_heroLoginPage.clickLoginButton();
    } );

    
    // TC4 (run this TC but we have to disable TC3 first with xit otherwise protractor will land into homepage and throw error as locators won't be found)
    it('clear username value and perform assertion', () => { 
        internet_heroLoginPage.userName.click();
        internet_heroLoginPage.userName.clear();
        expect(internet_heroLoginPage.userName.getAttribute('value') ).not.ToBe('tomsmith');     // should return true
    } );


    // TC5
    it('clear password value and perform assertion', () => { 
        internet_heroLoginPage.passWord.click();
        internet_heroLoginPage.passWord.clear();
        expect(internet_heroLoginPage.passWord.getAttribute('value') ).not.ToBe('SuperSecretPassword!');     // should return true
    } );


} );                    // closing describe fn() here.