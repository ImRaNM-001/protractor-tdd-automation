describe('check element exist & visible in page', () => {

    // beforeAll( () =>{
    //     browser.waitForAngularEnabled(false);    
    // } );
    
    beforeEach( () => {
        browser.get('https://angularjs.org/');
    } )

    
    // TC1: check element exist in DOM (chercher.tech Qs: Check If An Element Exists in Protractor ?)
    it('check if element exists in a page', () => {
        element.all(by.id("....element-id........")).count().then(totalMatches => {
            if(totalMatches>0)console.log("element is present");
            else console.log("element is not present");            
        } );

    } );                                // closing 1st it block

    // better alternative (just an example and easy way i found)
        // const myElement = element(by.linkText('Login'));
        // expect(myElement.isPresent() ).toEqual(true);


    // TC2: check element is visible in the page or not (chercher.tech Qs: How To Check If An Element Is Visible With Protractor?)
    it('check if element is visible in a page', () => {
        element(by.id('......it\'s id.......') ).isDisplayed().then(displayed => {
            if(displayed)console.log('the element is displayed');
            else console.log('the element is not displayed');
        } );

    } );                                // closing 2nd it block




} );                                    // closed describe block