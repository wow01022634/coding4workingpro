function showQuote(stocksymbol) {
  //Using SpreadsheetApp object to access spreadsheet
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var mainsheeet = ss.getSheetByName("webscrap");
  //Accessing stock quote information using api
  var URL_String = "https://finnhub.io/api/v1/quote?symbol="+stocksymbol+"&token={token id}";
  var response = UrlFetchApp.fetch(URL_String);
  var json = response.getContentText();
  var data = JSON.parse(json);

  //var jok = data.contents.jokes[0].joke.text;
  console.log(data.c);
  return data.c;

}
 
