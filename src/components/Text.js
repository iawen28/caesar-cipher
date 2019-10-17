import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class Text extends Component {
  
  changeHandler(e) {
    console.log(e.target.value);
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(e.target.value);
      }
  }

    render() {
      return (
        <div className="input-text-section">
          <center>
            <h2>Text</h2>
            <TextField
              multiline
              rowsMax="10"
              margin="normal"
              placeholder="Enter your text"
              value={this.props.value} 
              onChange={this.changeHandler.bind(this)} 
            />
          </center>
        </div>);
    }
}

export default Text;
