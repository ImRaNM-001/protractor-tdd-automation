describe('check element exist & visible in page', () => {
    
    beforeEach( () => {
        browser.get('https://angularjs.org/');
    } )

    // TC 1: check element EXISTS in DOM (chercher.tech Qs: Check If An Element EXISTS in Protractor ?)
    it('check if element EXISTS in a page', async () => {
            
        // const theElement = element(by.linkText('Login') );

        // way 1: (most easiest way) using await and printing in console by isPresent() fn
            // console.log(await theElement.isPresent() );
            
        // way 2: using expect assertion
        // expect(theElement.isPresent() ).toEqual(true);

        // way 3: using count() fn as how cher-cher tech explained in his page
        element.all(by.id("....element-id........") ).count().then(totalMatches => {        // we can also write $$('#elemID').count()
            if(totalMatches > 0) console.log("element is present");
            else console.log("element is not present");            
        } );

    } );                                     // closing 1st it block


    // TC 2: check element is VISIBLE in the page or not (chercher.tech Qs: How To Check If An Element Is VISIBLE With Protractor?)
    it('check if element is VISIBLE in a page', async () => {
        
        // const theElement = element(by.linkText('Login') );

        // way 1: (most easiest way) using await and printing in console by isDisplayed() fn
            // console.log(await theElement.isDisplayed() );
            
        // way 2: using expect assertion
        // expect(theElement.isDisplayed() ).toEqual(true);

    // way 3: using isDisplayed() fn as how cher-cher tech explained in his page
        element(by.id('......it\'s id.......') ).isDisplayed().then(displayed => {      // we can also write $$('#elemID').isDisplayed()
            if(displayed) console.log('the element is displayed');
            else console.log('the element is not displayed');
        } );
    } );                                // closing 2nd it block

} );                                    // closed describe block