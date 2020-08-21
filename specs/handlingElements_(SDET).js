/* following web elements will be covered as part of this test:
1- input/text box
2- button
3- dropdown
4- checkbox
5- alerts                   

below fn waitForAlert() in describe block can also be written in following ways, way 1 (i replaced this fn() with above one)
    waitForAlert = (alertNotFoundMsg => {
        const ec = protractor.ExpectedConditions;
        browser.wait(ec.alertIsPresent(), 5000, alertNotFoundMsg);  // putting an explicit wait to wait for an alert instead of browser.sleep() fn
        alert = browser.switchTo().alert();
    } );

    // way 2 (without using ES6 syntax, is quick to write)
    waitForAlert(alertNotFoundMsg){
        const ec = protractor.ExpectedConditions;
        browser.wait(ec.alertIsPresent(), 5000, alertNotFoundMsg);  
        alert = browser.switchTo().alert();
    } 
                    */

describe('handling elements in an angular app', () => { 

    let alert;    

    // learnt new thing today(17-Apr-2020) i.e, non static fn() as below can be declared without let/const keyword
        waitForAlert = (userText => {
        const ec = protractor.ExpectedConditions;
        browser.wait(ec.alertIsPresent(), 5000, 'still alert not found');  // putting an explicit wait to wait for an alert instead of browser.sleep() fn
        alert = browser.switchTo().alert();
        browser.sleep(1000);                     // waiting for 1 secs once switched to alert
        
        // console.log('Text on alert is ', await alert.getText() );    // can't use this line unless fn() made async
        expect(alert.getText() ).toContain(userText);
        alert.accept();
    } );

    it('add a new user_SDET video', async () => { 
        browser.get('http://www.trycatchclasses.com/code/demo/angular_crud/#');

        // using generic fn() for waiting for alert    
        waitForAlert('Error in');

        // alert.accept();

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
        waitForAlert('Error in');
       
        // printing alert text in the console
        console.log('Text on alert is ', await alert.getText() );
        
        /*  validation of text displayed in alert    [Below code is correct but won't run because the application is broken from here]
        expect(alert.getText() ).toContain('User Information Added Successfu');

        // click OK on the alert
        alert.accept();
        browser.sleep(3000);

        // dropdown: selecting 5th value and click it
        const dp_value = element(by.model('search.type') ).$$( ('option').get(5) );
        dp_value.click();
        browser.sleep(3000);            */
    } );

    it('dropdown value handle_qavbox video part2', async () => { 

        // generic fn() to wait for the alert, validate it's text and accept it [this one is almot same as previous one of 1st it block]
        function validateAlert_and_Close(userText){        // written ES5 way, also can write....validateAlert_and_Close = (userText =>{
            const ec = protractor.ExpectedConditions;
            browser.wait(ec.alertIsPresent(), 4000, "ALert not found");
 
            alert = browser.switchTo().alert();
            browser.sleep(1000);                        // waiting 2 secs for the code to click OK button on the alert 
            expect(alert.getText() ).toContain(userText);
            alert.accept(); 
        }

        // browser.get('http://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');    // dead url (2 yrs - Y2018 ago but got correct one below from qavbox new video in Y2020)

        browser.get('http://way2automation.com/angularjs-protractor/banking/#/manager/addCust');
        browser.sleep(2000);

        element(by.model('fName') ).sendKeys("Steve");
        element(by.model('lName') ).sendKeys("Rogers");
        element(by.model('postCd') ).sendKeys('1727 street');
        $('.btn.btn-default').click();

        // calling alert wait fn() below
        validateAlert_and_Close('Customer added');

        // switching to 2nd tab (Open Account tab)
        element(by.buttonText('Open Account') ).click();
        browser.sleep(1000);

    // below code is for dropdown selection for dynamic value (means user-defined entries):
        const parent_elem = element(by.model('custId') ),               // Customer dropdown = parent_elem
        child_elems = parent_elem.$$('option'),                         // Customer options = child_elems

        textOf_child_elems = await child_elems.getText();
        console.log('Printing the all the customer names (stored in an array): ', textOf_child_elems);
        
        parent_elem.click();
        browser.sleep(1000);

        // using tradional for loop to hit the element in dropdown      
        /*  for(let index = 0;  index < textOf_child_elems.length;  index++){            
            if(textOf_child_elems[index] == 'Steve Rogers')   child_elems.click();  // here i have done array.click() instead of array[index].click() which is not a fn() as compliler threw error repeatedly when written initially
        }

        // using for-in loop to hit the element in dropdown
        for(const index in textOf_child_elems){
            if(textOf_child_elems[index] === 'Steve Rogers') child_elems.click();
        }                                                                                 */

        // using for-of loop to hit the element in dropdown
        for(const elem of textOf_child_elems){
            if(elem == 'Steve Rogers') child_elems.click();
        }

        element(by.model('currency') ).$('[value="Dollar"]').click();  
        element(by.buttonText("Process") ).click();
        browser.sleep(1000);

        // calling alert wait fn() below
        validateAlert_and_Close('Account created');  

        // switching to 3rd tab (Customers tab)
        element(by.buttonText('Customers') ).click();
        browser.sleep(1000);

        // locating the created entry in the table
        const tbl_lastRow_fName = $$('tr').last().$$('td').first(),    // note: this is just the locator and not the getText()
        tbl_lastRow_DelBtn = $$('tr').last().element(by.buttonText('Delete') );

        browser.sleep(1000);

        // deleting the created entry
        tbl_lastRow_DelBtn.click();

        // validating the result,   way 1: (MOST EASY way) using expect
        console.log('The first name of last entry is', await tbl_lastRow_fName.getText() );
        expect(tbl_lastRow_fName.getText() ).not.toBe('Steve');     // passed [prints failed msg as....."Expected 'Neville' to be 'Steve'."]

        // way 2: programmers way using if condition
        if(await tbl_lastRow_fName.getText() !='Steve') console.log('Entry successfully deleted');       
        else console.log('Entry not deleted');          // checked 2nd stmt also works just fine!

        browser.sleep(1000);
    } );

} );