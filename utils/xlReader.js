const xl = require('C:/testAutomationPractice/installationArea/Protractor/node_modules/xlsx');

// import {xlsx} from 'C:/testAutomationPractice/installationArea/Protractor/node_modules/xlsx';   // ES6 module concept

class XlReader{

    readData_fromExcel(sheetName, filePath){
        const workBook = xl.readFile(filePath);
        const workSheet = workBook.Sheets(sheetName);
        return xl.utils.sheet_to_json(workSheet);
    }

}
module.exports = new XlReader();