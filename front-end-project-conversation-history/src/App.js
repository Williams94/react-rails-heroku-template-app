import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3001/messages')
        .then(response => response.json())
        .then(data => setMessages(data));
    }, []);

  // useEffect(() => {
  //   fetch('http://localhost:3001/messages', {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       'message': {
  //         'message_body': 'Hello, world!'
  //       }
  //     })
  //     // body: {
  //       // message_body: 'Hello, world!'
  //     // }
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error))
  // }, []);


  return (
    <div className="App">
      <ul>
        {messages.map(message => (
          <>
            <li key={message.id}>{message.message_body}</li>
            <li key={message.id}>{message.created_at}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
