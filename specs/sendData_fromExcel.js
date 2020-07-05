const xlr = require('../utils/xlReader');
// import {xlReader} from './utilities/xlReader';
// const xlr = new xlReader();

describe('reading data from an excel file', () =>{

    beforeEach( () => {
        browser.get('https://angularjs.org/');
    } )

    const t1Data = xlr.readData_fromExcel('Sheet1', '../testData/inputUserNames_Passwords.xlsx');

    t1Data.forEach(rowData =>{
        it('should read usernames from userName column', () =>{
            const todo_WebElement = element(by.model('todoList.todoText') );
            todo_WebElement.sendKeys(rowData.userName);

            const addButton = element(by.buttonText('add') );
            addButton.click();
        } );                            // closing it block here
    } );                            // closing forEach fn here


} );                        // closing describe block here