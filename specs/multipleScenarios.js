describe('writing multiple scenarios', () => {
    
    // beforeAll( () => {
    //     browser.waitForAngularEnabled(false);        // not required for an angular app
    // } );
    
    beforeEach( () => {
        browser.get('https://angularjs.org/');
        // browser.get(browser.params.baseURL);            // i tested and works perfectly fine
    } );

    // TC 1: Verfiy Tooltip (DONE)
    it('verify tooltip', async () => {
        // const toolTip_Arr = element.all(by.css('code.nocode.code-annotation') );         // i used it for testing purpose
        // toolTip_Arr.get(0).click();
        // browser.sleep(5000);
        
    // way 1: using async await to handle promise (easy way)
        const first_tooltip = $$('code.nocode.code-annotation').get(0);
        const tooltipText = await first_tooltip.getAttribute('uib-popover');       // here 'uib-popover' is nothing but attribute name
        console.log('2nd tooltip text is: ', tooltipText);                  // prints Place your mouse over highlighted areas in the code for explanations.
        
    // way 2: using .then() to handle promise (long way)
        const second_tooltip = $$('code.nocode.code-annotation').get(1);
        second_tooltip.getAttribute('popover-title').then(tooltipText => console.log('1st tooltip text is: ', tooltipText) );        // prints Hover

        /* 
        Note: 1- if variable is started with number then     SyntaxError: Invalid or unexpected token
        and 2- if await keyword is used without an async fn() then       SyntaxError: await is only valid in async function
        
        some sample trials for hunting css in earlier days:

        1. element(by.cssContainingText('.nocode.code-annotation', 'me') ).getAttribute('title').then(tooltipText => console.log(tooltipText) );       // here title is nothing but attribute name (not attribute value)

        2. $('div.span4 > span > code.nocode.code-annotation').getAttribute('me').then(tooltipText => console.log(tooltipText) );
        
        3. $('div.span4 > span > em:nth-child(1) code').click();

        4. $$('div#main_b_footer_second_block > ul > li');      // or, element.all(by.css('div#main_b_footer_second_block > ul > li') );

        5. $('#main_b_footer_second_block').$$('li');      // or, element(by.css('#main_b_footer_second_block') ).$$('li') );

        */

    } );

    // TC 2: Get typed value from a textbox (DONE)
    it('fetch value from textbox', async () => {
        const nameField = element(by.model('yourName') );

    // way 1: using async await to handle promise (easy way)
        nameField.sendKeys('dhoom2');
        console.log(await nameField.getAttribute('value') );            // prints dhoom2 to the console
        
        nameField.clear();
        browser.sleep(3000);

    // way 2: using .then() to handle promise (long way)        
        nameField.sendKeys('I am Bond');
        nameField.getAttribute('value').then(text => console.log(text) );     // 'value' is attribute name and not attribute value and it prints I am Bond to the console
    } );

    
    // TC 3: Get URL of a page (DONE)
    it('get url of the current page', async () => {
    // way 1: using async await to handle promise (easy way)
        console.log('The current page url is ' ,await browser.getCurrentUrl() );        // prints The current page url is  https://angularjs.org/ to the console
        
    // way 2: using .then() to handle promise (long way)  
        browser.getCurrentUrl().then(url => console.log(url) );     // prints https://angularjs.org/ to the console
    } );


    // TC 4: Get Page Title of a web page from the current page window (DONE)
    it('get title from the current window', async () => {
    // way 1: using async await to handle promise (easy way)
        console.log('The page title is ' ,await browser.getTitle() );          // using async, await no promise resolution required and prints The page title is  AngularJS — Superheroic JavaScript MVW Framework to the console

    // way 2: using .then() to handle promise (long way)  
        browser.getTitle().then(title => console.log(title) );      // prints AngularJS — Superheroic JavaScript MVW Framework        
    } );

    
    // TC 5: testing explicitly wait
    xit('explicitly waiting for an element', async () => {
        const ec = protractor.ExpectedConditions;
        await browser.wait(ec.presenceOf($('#something') ), 3000);
    } );


    // TC 6: Explore WebElement (DONE)
    fit('exploring webElement', async () => {        

        // using single element (Element Finder)
        const wb_elem = element(by.xpath('//h3[text()="Why AngularJS?"]') );
        console.log(await wb_elem.getWebElement().getText() );                      // prints Why AngularJS? because only writing getWebElement() will print long object to the console.        

    /*
    some sample trials for hunting xpath/css in earlier days:
    1- element(by.cssContainingText('.text-display-1', 'Why AngularJS?') ).getWebElement().then(element => console.log(element) ); 

    2- $('//h3[text()="Why AngularJS?"]').getWebElement().then(element => console.log(element) );       // $ and xpath combination surely won't work
    */

    } );                                                // closing TC7 it block
} );                            // closing main describe block