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



/* other codes from Selenium, for revision @ 1 shot

try{
    FileInputStream fis = new FileInputStream("/users/.........xlsx");
    Properties pr = new Properties();
    pr.load(fis);
}
catch(Exception e){
    e.printStackTrace();
}

=====================================================
try{
    FileInputStream fis = new FileInputStream("/users/.........xlsx");
    Workbook wb = WorkbookFactory.create(fis);              // Workbook is interface of Apache POI API
    Sheet sh = wb.getSheetAt(0);
    String eachCellValue = sh.getRow(rowNum).getCell(cellNum).getStringCellValue();
}
catch(Exception e){
   e.printStackTrace();
}

=========================================================
public ArraList<Object[]> getDataFromExcel(){
ArraList<Object[]> t1Data = new ArraList<Object[]>();

try{
    rdr = new XlReader("/users/.........nPowerDataSheet.xlsx");
}

catch(Exception e){
  e.printStackTrace();  
}

for(int rowNo = 2;  rowNo <= rdr.getRowCount("Sheet1");     rowNo++){
    String firstName = rdr.getCellData("Sheet1", "firstName", rowNo),
    lastName = rdr.getCellData("Sheet1", "lastName", rowNo),
    city = rdr.getCellData("Sheet1", "city", rowNo)...................


    Object[] obj = {firstName, lastName, address1, address2.........};
    t1Data.add(obj);
}

return t1Data;
}
*/