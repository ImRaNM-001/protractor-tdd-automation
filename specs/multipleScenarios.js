describe('writing multiple scenarios', () =>{
    
    // beforeAll( () =>{
    //     browser.waitForAngularEnabled(false);    
    // } );
    
    beforeEach( () =>{
        browser.get('https://angularjs.org/');
    } );


    // TC1: Verfiy Tooltip
    fit('verify tooltip', () =>{
        element(by.className('nocode code-annotation') ).getAttribute("title").then( (tooltipText) =>{
            console.log(tooltipText);
        } );
    } );

// TC2: Get typed value from a textbox (done)
it('fetch value from textbox', () =>{
    const nameField = element(by.model('yourName') );
    nameField.sendKeys('I am Bond');
    nameField.getAttribute('value').then( (text)=>{
        console.log(text);
    });
} );

// TC3: perform drag and drop
it('perform a simple drag and drop', () =>{
    browser.actions().dragAndDrop(
        sourceLoc, DestLoc,
        ).perform();

} );


// TC4: perform right click
it('perform a right click/ context click', () =>{
    const developLink = $('[]')

} );

// TC5: Explcit wait testing
it('explicitly waiting for an element', () =>{
    const eC = protractor.ExpectedConditions;
    browser.wait(eC.presenceOf(element(by.id('')) ), 3000);

} );

// TC6: Get URL of a page (done)
it('get url of the current page', () =>{
    browser.getCurrentUrl().then( (url) =>{
        console.log(url);    
    } );
} );

// TC7: Explore WebElement
it('exploring webElement', () =>{
    element(by.id('..some id...')).getWebElement();


} );

} );