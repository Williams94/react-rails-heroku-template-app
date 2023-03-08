import React from 'react';
import Moment from 'moment';
import {
  List,
  Divider,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import './MessageList.css';

const MessageList = ({ messages = [] }) => {
  Moment.locale('en');

  const renderListOfMessages = () =>
    messages.map(message => (
      <>
        <ListItem key={message.id}>
          <ListItemText primary={message.message_body} className='message-text' />
          <ListItemText primary={Moment(message.created_at).format('HH:mm DD MMM YYYY')} />
        </ListItem>
        <Divider component='li' />
      </>
    ))

  return (
    <div className='message-list'>
      <h2>
        Conversation History
      </h2>
      <List>
        <ListItem key='header'>
          <ListItemText primary='Message:' className='message-header' />
          <ListItemText primary='Sent:' />
        </ListItem>
        <Divider component='li' />
        <div className='messages'>
          {renderListOfMessages()}
        </div>
      </List>
    </div>
  );
}

export default MessageList;
