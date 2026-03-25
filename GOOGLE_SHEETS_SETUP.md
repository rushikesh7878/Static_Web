# Google Sheets setup

1. Create a Google Sheet in your Google Drive.
2. Rename the first sheet tab to `Leads`.
3. In that sheet, add these headers in row 1:

```text
Name | Email | Has Website | Goal | Submitted At | Source
```

4. Open `Extensions -> Apps Script`.
5. Replace the default script with this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name || '',
    data.email || '',
    data.hasWebsite || '',
    data.goal || '',
    data.submittedAt || '',
    data.source || '',
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

6. Click `Deploy -> New deployment`.
7. Choose `Web app`.
8. Set:
   - Execute as: `Me`
   - Who has access: `Anyone`
9. Copy the deployed web app URL.
10. Create a local `.env` file in the project root and add:

```text
VITE_GOOGLE_SCRIPT_URL=your_web_app_url_here
```

11. Restart the Vite dev server after adding the environment variable.

New submissions now send `Submitted At` in a readable format like:

```text
23 Mar 2026, 05:42:18 pm
```
