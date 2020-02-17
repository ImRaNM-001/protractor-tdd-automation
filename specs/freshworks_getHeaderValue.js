describe('interaction with freshworks web element', () => {

    beforeAll( () =>{
            browser.waitForAngularEnabled(false);    
        } )

    it('get header value', ()=>{
        browser.get('https://www.freshworks.com/');
        const header = $('h1');

        // const text = header.getText();
        // console.log('The fetched text is: ' + text);                // will not work/get the desired text in protractor unlike WDIO (shown in Naveen video: WebDriverIO - Write Your First Script | Element APIs | click, sendKeys and getText - Part -3), hence resolve as promise
        console.log(header.getText() );
        // header.getText().then( (textToPrint) => {
        // console.log(textToPrint);
        // } );
    } );
} );