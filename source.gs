//This program time stamps whenever an edit is inputted into column 6 (initals for Plating-Recieve tracking) for Hamilton Carrier Completion Form

var SHEET_NAME = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName(); //used for checking
var DATETIME_HEADER = 'DATE AND TIME'; //Modify this variable if a different column name is desired

function getDatetimeCol()
{
  var headers = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME).getDataRange().getValues().shift();
  var colindex = headers.indexOf(DATETIME_HEADER);
  return colindex+1;
};

function getInitialCol()
{
  var headers = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME).getDataRange().getValues().shift();
  var colindex = headers.indexOf(DATETIME_HEADER);
  return colindex;
};

function onEdit() 
{  
  var sheetName = SpreadsheetApp.getActiveSheet();
  var cell = sheetName.getActiveCell();
  var dateCell = sheetName.getRange(cell.getRowIndex(), getDatetimeCol());
  if (sheetName.getName() == SHEET_NAME && cell.getColumn() == getInitialCol() && !cell.isBlank() && dateCell.isBlank())
  {      
    dateCell.setValue(new Date()).setNumberFormat("MM/DD/YYYY hh:mm");
  }
};
