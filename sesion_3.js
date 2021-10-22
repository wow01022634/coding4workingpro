
//Creating object
var iCar = {
  make:'BMW',
  model:'Mini',
  year: 1969,
  speed: 7843,
  getBrand : function() {
    return this.make + " " + this.model;
  }
};


//Pring objects
  console.log(iCar.make);
  console.log(iCar['make']);
  console.log(iCar.getBrand());


  //Using SpreadsheetApp object to access sheet table data
  var sheet1 = SpreadsheetApp.getActiveSpreadsheet();
  var selected_sheet=sheet1.getSheetByName("TaskMaster (session 3)");
  var sheet1_data_cells1 = selected_sheet.getDataRange().getValues();
 
  //iterate row
  for (var i =1 ; i < sheet1_data_cells1.length; i++) 
  {
    //row [],column []
     if(sheet1_data_cells1[i][1]!="")
     {
         console.log(sheet1_data_cells1[i][1] +  ", " + sheet1_data_cells1[i][3]+", " + sheet1_data_cells1[i][5]);
     }
  }


//This is a full blown function to read from sheet/table and send email
function readfromsheets() {
  //Using SpreadsheetApp Class to access ActiveSpreadsheet function()
  var sheet1 = SpreadsheetApp.getActiveSpreadsheet();
  var selected_sheet=sheet1.getSheetByName("TaskMaster (session 3)");
  
  var sheet1_data_cells1 = selected_sheet.getDataRange().getValues();
 
  var cols = [];
  var messagebody = '';
  
  //iterate row
  for (var i =1 ; i < sheet1_data_cells1.length; i++) 
  {
    //row [],column []
     if(sheet1_data_cells1[i][1]!="")
     {
         //if status is not done
         if (sheet1_data_cells1[i][3] != "done") {
           //if email is not empty then send email
            if (sheet1_data_cells1[i][5] != "") {
              //Task + Status + Email
              console.log(sheet1_data_cells1[i][1] +  ", " + sheet1_data_cells1[i][3]+", " + sheet1_data_cells1[i][5]);
              messagebody = "Task: " + sheet1_data_cells1[i][1] + "," + "Status: " + sheet1_data_cells1[i][3];
              //sendemail (email, subject, messagebody)
              MailApp.sendEmail(sheet1_data_cells1[i][5], "subject: Your Daily Task Update", messagebody);
            }
          
         }
     }
  }
}
 
