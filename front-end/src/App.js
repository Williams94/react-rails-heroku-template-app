import React, { useState, useEffect } from 'react';
import Moment from 'moment';

import './App.css';
import MessageList from './components/MessageList/MessageList';
import Form from './components/Form/Form';

const App = () => {
  Moment.locale('en');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    fetch('/messages')
      .then(response => response.json())
      .then(data => setMessages(data));
  }, []);

  const handleSendMessage = () => {
    fetch('/messages', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'message': {
          'message_body': inputValue
        }
      })
    })
      .then(response => response.json())
      .then(data => setMessages([ data, ...messages ]))
      .catch(error => console.error(error))
  };

  return (
    <div className='App'>
      <h1>Project Conversation History</h1>
      <p>
        Welcome to the Project Conversation History!
      </p>
      <p>
        Here you can find the previous messages sent, including project status updates.
      </p>
      <p>
        You can also add your own messages and status updates using the form at the bottom of the page
      </p>
      <MessageList messages={messages} />
      <Form
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;
