import React from 'react';
import TextField from '@material-ui/core/TextField';

function Encryption(props) {

  return (
    <div className="encryption-section">
      <center>
        <h2>Encryption</h2>
        <TextField
          multiline
          rowsMax="10"
          margin="normal"
          value={props.value}
        />
      </center>
    </div>
  );    
}

export default Encryption;
