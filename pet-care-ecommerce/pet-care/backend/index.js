const express = require('express');
const bodyParser = require('body-parser');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./credentials.json');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// Google Sheets setup
const doc = new GoogleSpreadsheet('1GjERgPbnprDfegu6B1hKLI3v2--9CYRS73o1PvReeAI');

// Route to handle order submissions
app.post('/api/orders', async (req, res) => {
  const { firstName, phoneNumber, address } = req.body;

  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ FirstName: firstName, PhoneNumber: phoneNumber, Address: address });

    res.status(200).send('Order saved to Google Sheet');
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Error saving order');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

