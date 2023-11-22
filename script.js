function sendMessage() {
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Replace 'YOUR_TWILIO_ACCOUNT_SID', 'YOUR_TWILIO_AUTH_TOKEN', and 'YOUR_TWILIO_PHONE_NUMBER' with your Twilio credentials

    const accountSid = 'ACf0172da159f45aa9576fff3a2021ff2c';
    const authToken = '3e547ea726632689ff57a71701799279';
    const twilioPhoneNumber = '+18169259637';


    // Message to be sent
    const message = `Dear customer, your account number ending with (+91xxxxxx9063) has been activated`;

    // Use fetch to send a request to your server
    fetch(`/send-sms?to=${phoneNumber}&message=${encodeURIComponent(message)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Message sent successfully!');
    })
    .catch(error => console.error('Error:', error));
}
