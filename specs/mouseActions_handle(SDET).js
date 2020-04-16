describe('handling various mouse actions', () => { 

    const ec = protractor.ExpectedConditions;
    
    beforeEach( () => {
        browser.waitForAngularEnabled(false);     
    } );

// TC 1: mouse hover perform
    it('perform login and mouse hover on 2 embedded elements', async () => { 
        browser.get('https://opensource-demo.orangehrmlive.com/');
        $('#txtUsername').sendKeys('Admin');
        $('#txtPassword').sendKeys('admin123');
        // element(by.buttonText('Login') ).click();        // didn't recognized, hence commented
        element(by.name('Submit') ).click();

        const pim = $('#menu_pim_viewPimModule'),              // $('=PIM'), 
        confi = $('#menu_pim_Configuration'),                  // $('=Configuration'), 
        opt_fields = $('#menu_pim_configurePim');             // $('=Optional Fields');

        browser.actions().mouseMove(pim).mouseMove(confi).mouseMove(opt_fields).click().perform();
        browser.wait(ec.visibilityOf($('h1') ), 5000);          // waiting for Configure PIM header
        expect($('h1').getText() ).toBe('Configure PIM');

    } );


// TC 2: double click perform
    it('perform double click on a button', async () => { 
        browser.get('https://testautomationpractice.blogspot.com');
        
        // way 1
        const btnElement = element(by.buttonText('Copy Text') );
        // const btnElement = element(by.cssContainingText('button[ondblclick="myFunction1()"]', 'Copy Text') );   // checked & works fine    
        // const btnElement = element(by.xpath('//button[text()="Copy Text"]') );            // checked & works fine 
        browser.actions().doubleClick(btnElement).perform();

        // way 2
        // browser.actions().mouseMove(btnElement).doubleClick().perform();            // checked & works fine 
        const field2_Text = $('#field2').getAttribute('value'); 
        browser.wait(ec.visibilityOf(field2_Text), 5000, 'this msg will be printed if field2_Text element not found');
        expect(field2_Text).toContain('Hello World');
    } );


// TC 3: right click perform and switching to an alert
    it('perform a right click/ context click and actions on an alert', async () => {
        browser.get('https://swisnl.github.io/jQuery-contextMenu/demo.html');

        const rt_clickBtn = $('.context-menu-one.btn.btn-neutral');
        // browser.actions().contextClick(rt_clickBtn).perform();        // prints red error TypeError: browser.actions(...).contextClick is not a function
        browser.actions().click(rt_clickBtn, protractor.Button.RIGHT).perform();
        // const list_options = $('ul.context-menu-list.context-menu-root > li:nth-child(7)');      // list option started from index 1 and not 0
        const list_options = $('ul.context-menu-list.context-menu-root > li:last-child');         // also works fine
        // const list_options = $('ul.context-menu-list > li:last-child');                // also works fine where i used only 1 className
        list_options.click();

        // browser.pause();
        const alert = browser.switchTo().alert();
        console.log(await alert.getText() );
        browser.sleep(3000);
        alert.accept();
    } );


// TC 4: drag and drop perform
    it('perform a simple drag and drop', async () => {
        browser.get('https://codef0rmer.github.io/angular-dragdrop/#!/');
        browser.waitForAngularEnabled(true); 

        const sourceLoc = element(by.model('list1') );
        const destnLoc = element(by.model('list2') );
        browser.actions().dragAndDrop(sourceLoc, destnLoc).perform();

        browser.sleep(3000);
    } );

    // afterEach( async () => {
    //     await browser.close();
    // } );

} );                        // describe block closed