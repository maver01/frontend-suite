import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    fetch('http://localhost:8000/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then(response => {
        if (response.ok) { // response is 200
          console.log('Message sent successfully');
          // print the response body as text
          //response.text().then(text => console.log(text));
        } else {
          console.error('Failed to send message');
          response.text().then(text => console.error(text));
        }
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={handleMessageChange}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
