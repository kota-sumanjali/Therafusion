
async function chatbot() {

    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    // Display user's message
    appendMessage('You', userInput);
    document.getElementById('userInput').value = '';

    try {
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey

            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Specify the model you want to use
                messages: [
                    { role: 'user', content: userInput }
                ]
            })
        });

        const data = await response.json();
        //alert(data);

        if (response.ok) {
            const botMessage = data.choices[0].message.content;
            // Display bot's response
            appendMessage('Bot', botMessage);
        } else {
            console.error('Error:', data.error);
            //alert('Error: ' + data.error.message);
        }

        //const botResponse = data.response;

    } catch (error) {
        console.error('Error:', error);
        //alert('An error occurred while sending the message.');
    }
}