import React from 'react';
import Moment from 'moment';
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  TextField,
  Divider
} from '@material-ui/core';

import './Form.css';

const statuses = [
  'Not Started',
  'In Progress',
  'Blocked',
  'Completed',
]

const Form = ({ inputValue, handleInputChange, handleSendMessage }) => {
  Moment.locale('en');

  const renderStatusOptions = () =>
    statuses.map((status) =>
      <MenuItem value={`Project Status Changed to: ${status}`}>
        {status}
      </MenuItem>
    )

  return (
    <div className='form'>
      <h2>
        Send a Message
      </h2>
      <FormControl fullWidth>
        <InputLabel>
          Project Status
        </InputLabel>
        <Select
          value={inputValue}
          label='Project Status'
          onChange={handleInputChange}
          >
          {renderStatusOptions()}
        </Select>
      </FormControl>
      <FormControl fullWidth className='message-form'>
        <TextField
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          id='outlined-basic'
          label='Enter Message:'
          variant='outlined'
        />
        <Button
          variant='contained'
          onClick={handleSendMessage}
        >
          Send Message
        </Button>
      </FormControl>
    </div>
  );
}

export default Form;
