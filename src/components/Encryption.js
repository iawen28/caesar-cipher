import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Encryption extends Component {

  render() {
    return (
      <div className="right">
        <center>
          <h2>Ciphertext</h2>
          <TextField
            multiline
            rowsMax="10"
            margin="normal"
            value={this.props.value}
          />
        </center>
      </div>);
    }
}

export default Encryption;
