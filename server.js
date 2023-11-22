const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Twilio credentials
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const twilioClient = twilio(accountSid, authToken);

// Endpoint to send messages
app.get('/send-message', (req, res) => {
  const phoneNumber = req.query.phoneNumber;

  // Your Twilio phone number
  const fromNumber = 'YOUR_TWILIO_PHONE_NUMBER';

  const message = `Dear customer, your account number ending with (+91xxxxxx9063) has been activated`;

  twilioClient.messages.create({
    body: message,
    from: fromNumber,
    to: phoneNumber
  })
  .then(() => {
    res.json({ message: 'Message sent successfully' });
  })
  .catch(error => {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Error sending message' });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
