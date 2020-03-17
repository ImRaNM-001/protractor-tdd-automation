describe('writing multiple scenarios', () => {
    
    // beforeAll( () => {
    //     browser.waitForAngularEnabled(false);    
    // } );
    
    beforeEach( () => {
        browser.get('https://angularjs.org/');
        // browser.get(browser.params.baseURL);            // works perfectly fine
    } )

    // TC1: Verfiy Tooltip
    xit('verify tooltip', () => {
        // element(by.cssContainingText('.nocode.code-annotation', 'me') ).getAttribute("title").then(tooltipText => console.log(tooltipText);            // here title is nothing but attribute name (not attribute value)

        // $('div.span4>span>code.nocode.code-annotation').getAttribute("me").then( (tooltipText) =>{
        //     console.log(tooltipText);
        
        $('div.span4>span>em:nth-child(1) code').click();

        //  // return $$ ('div#main_b_footer_second_block>ul>li');
        // // return (element.all(by.css('div#main_b_footer_second_block>ul>li')) );

        // // return (element(by.css('#main_b_footer_second_block')).$$('li') );
        // return  $ ('#main_b_footer_second_block').$$('li');

        // } );
    } );

    // TC2: Get typed value from a textbox (done)
    it('fetch value from textbox', () => {
        const nameField = element(by.model('yourName') );
        nameField.sendKeys('I am Bond');
        nameField.getAttribute('value').then(text => console.log(text) );     // 'value' is attribute name and not attribute value
    } );

    // TC3: perform drag and drop
    xit('perform a simple drag and drop', () => {
        browser.actions().dragAndDrop(
            sourceLoc, destLoc,
            ).perform();
    } );


    // TC4: perform right click
    xit('perform a right click/ context click', () => {
        const developLink = $('[]');

    } );


    // TC5: Explcit wait testing
    xit('explicitly waiting for an element', () => {
        const ec = protractor.ExpectedConditions;
        browser.wait(ec.presenceOf($('#something') ), 3000);
    } );

    // TC6: Get URL of a page (done)
    it('get url of the current page', () => {
        browser.getCurrentUrl().then(url => console.log(url) );    
    } );

    // TC7: Get Title of a page from the webpage window (done)
    fit('get title from the current window', () => {
        browser.getTitle().then(title => console.log(title) );             
    } );


    // TC8: Explore WebElement (partially done, returns long )
    it('exploring webElement', () => {
        // element(by.xpath('//h3[text()="Why AngularJS?"]')).getWebElement();              // need to resolve the promise, hence follow next line
        // $('//h3[text()="Why AngularJS?"]').getWebElement().then( (element) => {             // $ and xpath combination may not work
            // console.log(element);        
        // } );
            element(by.cssContainingText('.text-display-1', 'Why AngularJS?') ).getWebElement().then(element => {
        console.log(element);        
        } );                                // closing promise started with then fn()
  
    } );                                                // closing TC7 it block



} );                            // closing main describe block