function sendMessage() {
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Use an API or a service to send the message
    var apiUrl = 'https://console.twilio.com/us1/account/keys-credentials/api-keys/SK6f1e53073ce295db2dae9adf95058fb4';  // Replace with the actual API endpoint

    // You may need an API key or authentication to use the messaging service
    var apiKey = 'SK6f1e53073ce295db2dae9adf95058fb4';  // Replace with the actual API key

    var message = "Dear customer, your account number ending with (+91xxxxxx9063) has been activated.";

    // Use fetch or AJAX to send a POST request to the messaging service
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey,
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
            message: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent successfully:', data);
        // Optionally, you can show a success message on the webpage
    })
    .catch(error => {
        console.error('Error sending message:', error);
        // Optionally, you can show an error message on the webpage
    });
}
