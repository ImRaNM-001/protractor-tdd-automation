const xlReader = require('../utilities/xlReader');
// import XlReader from './utilities/xlReader';

describe('reading data from an excel file', () =>{

    beforeEach( () => {
        browser.get('https://angularjs.org/');
    } )

    const t1Data = xlReader.readData_fromExcel('Sheet1', '../testData/inputUserNames_Passwords.xlsx');

    t1Data.forEach(rowData => {
        it('should read usernames from userName column', () => {
            const todo_WebElement = element(by.model('todoList.todoText') );
            todo_WebElement.sendKeys(rowData.userName);

            const addButton = element(by.buttonText('add') );
            addButton.click();
        } );                            // closing it block here
    } );                            // closing forEach fn here


} );                        // closing describe block here