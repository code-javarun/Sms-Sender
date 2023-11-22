const express = require('express');
const bodyParser = require('body-parser');
const client = require('twilio')('ACf0172da159f45aa9576fff3a2021ff2c', '3e547ea726632689ff57a71701799279');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/send-sms', (req, res) => {
    const to = req.query.to;
    const message = req.query.message;

    client.messages
        .create({
            body: message,
            from: '+18169259637',
            to: `+${to}`
        })
        .then(message => {
            console.log(message.sid);
            res.json({ success: true, message: 'Message sent successfully' });
        })
        .catch(error => {
            console.error('Error sending message:', error);
            res.status(500).json({ success: false, message: 'Error sending message' });
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
