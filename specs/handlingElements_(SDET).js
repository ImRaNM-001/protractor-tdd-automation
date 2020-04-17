/* following web elements will be covered as part of this test:
1- input/text box
2- button
3- dropdown
4- checkbox
5- alerts                   */

describe('handling elements in an angular app', () => { 

    let alert;    

    // learnt new thing today(17-Apr-2020) i.e, non static fn() can be declared without let/const keyword
    waitForAlert = (alertNotFoundMsg => {
        const ec = protractor.ExpectedConditions;
        browser.wait(ec.alertIsPresent(), 5000, alertNotFoundMsg);  // putting an explicit wait to wait for an alert instead of browser.sleep() fn
        alert = browser.switchTo().alert();
    } );

    // or, above fn() can also be written like
    // waitForAlert(alertNotFoundMsg){
    //     const ec = protractor.ExpectedConditions;
    //     browser.wait(ec.alertIsPresent(), 5000, alertNotFoundMsg);  
    //     alert = browser.switchTo().alert();
    // }


    fit('add a new user_SDET video', async () => { 
        browser.get('http://www.trycatchclasses.com/code/demo/angular_crud/#');

        // using generic fn() for waiting for alert    
        waitForAlert('still alert not found');

        alert.accept();

        $('span[ng-click="addUser()"]').click();

        // input/text boxes
        element(by.model('UserFirstname') ).sendKeys('Tony');
        element(by.model('UserLastname') ).sendKeys('Stark');
        element(by.model('UserType') ).sendKeys(1);
        
        // check box
        element(by.model('UserActive') ).click();

        // save button
        element(by.buttonText('Save') ).click();     // by.buttonText locator works only when type="button" or type="submit" or tagName itself is <button ng-class=".............

        // using generic fn() for waiting for alert   
        waitForAlert('still alert not found');
       
        // printing alert text in the console
        console.log(await alert.getText() );
        
        // validation of text displayed in alert
        // expect(alert.getText() ).toContain('User Information Added Successfu');

        // // click OK on the alert
        // alert.accept();
        // browser.sleep(3000);

        // // dropdown: selecting 5th value and click it
        // const dp_value = element(by.model('search.type') ).$$( ('option').get(5) );
        // dp_value.click();
        // browser.sleep(3000);
    } );

    it('dropdown value handle_qavbox video part2', async () => { 

        // generic fn() to wait for the alert, validate it's text and accept it
        validateAlert_and_Close(userText){
            const ec = protractor.ExpectedConditions;
            browser.wait(ec.alertIsPresent(), 4000, "ALert not found");
 
            let alert = browser.switchTo().alert();
            browser.sleep(2000);                        // waiting 2 secs for the code to click OK button on the alert 
            expect(alert.getText() ).toContain(userText);
            alert.accept(); 
        }

        browser.get('http://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');      // dead url (2 yrs - Y2018 ago)

        element(by.model('fName')).sendKeys("Steve");
        element(by.model('lName')).sendKeys("Rogers");
        element(by.model('postCd')).sendKeys('1727 street');
        $('.btn.btn-default') ).click();

        // calling alert wait fn() below
        validateAlert_and_Close('Customer Added');

        element(by.buttonText('Open Account') ).click();

    // below code is for dropdown selection for dynamic value (means user-defined entries):
        const parent_elem = element(by.model('custId') ),               // Customer dropdown = parent_elem
        child_elems = parent_elem.$$('option');                         // Customer options = child_elems

        // using tradional for loop to hit the element in dropdown
        for(let index = 0;  index < child_elems.length;  index++){
            if(child_elems[index] === 'Steve Rogers')	child_elems[index].click();
        }           

        // using for-in loop to hit the element in dropdown
        for(const index in child_elems){
            if(child_elems[index] === 'Steve Rogers') child_elems[index].click();
        }

        // using for-of loop to hit the element in dropdown
        for(const elem of child_elems){
            if(elem === 'Steve Rogers') elem.click();
        }

        element(by.model('currency') ).$('[value="Dollar"]').click();  
        element(by.buttonText("Process")).click();
        browser.sleep(3000);

        // calling alert wait fn() below
        validateAlert_and_Close('Account Created');
    } );

} );