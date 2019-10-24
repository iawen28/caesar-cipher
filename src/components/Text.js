import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function Text(props) {
  const changeHandler = e => {
    if (typeof props.onChange === 'function') {
      props.onChange(e.target.value);
    }
  }

  return (
    <div className="input-text-section">
      <center>
        <h2>Text</h2>
        <TextField
          multiline
          rowsMax="10"
          margin="normal"
          placeholder="Enter your text"
          value={props.value} 
          onChange={changeHandler.bind(this)} 
        />
      </center>
    </div>
  );  
}

export default Text;
