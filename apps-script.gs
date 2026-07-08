// Paste this into: your Google Sheet > Extensions > Apps Script
// Then deploy as a Web App (see README.md for exact steps).

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Add header row once, if the sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Attending', 'Guests', 'Dietary', 'Message']);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.attending || '',
    data.guests || '',
    data.dietary || '',
    data.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
