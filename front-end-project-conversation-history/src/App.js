import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { List, Divider, ListItem, ListItemText } from '@material-ui/core';

import './App.css';

const App = () => {
  Moment.locale('en');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:3001/messages')
      .then(response => response.json())
      .then(data => setMessages(data));
  }, []);

  const handleButtonClick = () => {
    fetch('http://localhost:3001/messages', {
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
      .then(data => setMessages([ ...messages, data ]))
      .catch(error => console.error(error))
  };

  return (
    <div className="App">
      <h1>Project Conversation History</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#E7EBF0' }}>
        <ListItem key="header">
          <ListItemText primary="Message:" />
          <ListItemText primary="Sent:" />
        </ListItem>
        <Divider component="li" />
        {messages.map(message => (
          <>
            <ListItem key={message.id}>
              <ListItemText primary={message.message_body} />
              <ListItemText primary={Moment(message.created_at).format('DD MMM YYYY')} />
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Log Input Value</button>
      </div>
    </div>
  );
}

export default App;
