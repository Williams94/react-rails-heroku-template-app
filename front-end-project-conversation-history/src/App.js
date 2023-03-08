import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import {
  List,
  Divider,
  ListItem,
  ListItemText,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';

import './App.css';

const divStyle = {
  width: '300px'
};

const statuses = [
  'Not Started',
  'In Progress',
  'Blocked',
  'Completed',
]

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
      .then(data => setMessages([ ...messages, data ]))
      .catch(error => console.error(error))
  };

  return (
    <div className="App">
      <h1>Project Conversation History</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#E7EBF0' }}>
        <h2>
          <ListItem key="header">
            <ListItemText primary="Message:" />
            <ListItemText primary="Sent:" />
          </ListItem>
        </h2>
        <Divider component="li" />
        {messages.map(message => (
          <>
            <ListItem key={message.id}>
              <ListItemText primary={message.message_body} style={divStyle} />
              <ListItemText primary={Moment(message.created_at).format('HH:mm DD MMM YYYY')} />
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send Message</button>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Project Status
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputValue}
            label="Project Status"
            onChange={handleInputChange}
          >
            {statuses.map((status) =>
              <MenuItem value={`Project Status Changed to: ${status}`}>{status}</MenuItem>
            )}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
