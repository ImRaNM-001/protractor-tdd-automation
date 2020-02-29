const xlSX = require('C:/testAutomationPractice/installationArea/Protractor/node_modules/xlsx');

// import { } from 'C:/testAutomationPractice/installationArea/Protractor/node_modules/xlsx';   // ES6 module

class XlReader{

    readData_fromExcel(sheetName, filePath){
        const workBook = xlSX.readFile(filePath);
        const workSheet = workBook.Sheets(sheetName);
        return xlSX.utils.sheet_to_json(workSheet);
    }

}
module.exports = new XlReader();