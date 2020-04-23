describe('handling various keyboard actions', () => { 

    // beforeAll( () => { 
    //     browser.waitForAngularEnabled(false);    // since ignoreSynchronization = true in conf.js file, this block is not required and commented
    // } );

    beforeEach( () => { 
        browser.get('http://the-internet.herokuapp.com/key_presses?');
        browser.sleep(1000);
    } );

    it('hit enter, space and escape on an webpage', async () => { 

        // 1- mimicking Enter/Return key pressed on keyboard
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

        // 2- mimicking Escape key pressed on keyboard 
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        browser.sleep(1000);

        // 3- mimicking Space key pressed on keyboard 
        browser.actions().sendKeys(protractor.Key.SPACE).perform();
        browser.sleep(1000);

        // 4- mimicking Tab key pressed on keyboard
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.sleep(1000);
        
        // 5- mimicking Alt key pressed on keyboard
        browser.actions().sendKeys(protractor.Key.ALT).perform();
        browser.sleep(1000);

        // 6- finally refreshing page with Enter key again
        $('#target').sendKeys('sexy boy');          // sending some keys to the blank text box just to gain control over the web element (this step is not mandatory - running just for fun)
        browser.sleep(1000);

        $('#target').sendKeys(protractor.Key.ENTER);            // DON't EVER put perform() fn on an element level keyboard action othewise red error "TypeError: $(...).sendKeys(...).perform is not a function" will come, perform() fn is only used with actions() fn [of Actions class]

        browser.sleep(1000);
    } );

    it('stop page load by pressing escape key', async () => { 
        element(by.linkText('Elemental Selenium') ).click();
        // $('=Elemental Selenium').click();            // this type of linkText identifcation works only in WDIO, here it throws red error "Failed: invalid selector: An invalid or illegal selector was specified"

        // switching control to the corresponding new window
        const windowCount = await browser.getAllWindowHandles(),        // this code returns an array, here windowCount is an array        
        orginalWindow = windowCount[0], firstWindow = windowCount[1];

        console.log('Total no of windows opened here are: ', windowCount.length);        
        browser.switchTo().window(firstWindow);

        // stopping the page load using escape key [UNFINISHED BUSINESS]
        $('body').sendKeys(protractor.Key.ESCAPE);
        // element(by.tagName('body') ).sendKeys(protractor.Key.ESC);
        // browser.executeScript("document.getElementsByTagName('body').value='protractor.Key.ESCAPE'");
        // browser.executeScript("return window.stop()");
        // browser.executeScript("window.stop();");
        browser.sleep(2000);

        // switching back to original window (just for testing purpose to ensure below line of code works)
        browser.switchTo().window(orginalWindow);
        browser.sleep(1000);

        // again switching to other window and closing it
        browser.switchTo().window(firstWindow);
        browser.refresh();                      // reload or refreshing page
        // browser.navigate().refresh();        // also works fine to refresh/reload the page

        browser.sleep(1000);
        browser.close();
        
        browser.sleep(1000);
    } );

} );