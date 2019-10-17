import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/MenuItem';

class Cipher extends Component {
  changeHandler(e) {
    console.log(e.target.value);
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(e.target.value);
      }
  }

  render() {
    return (
      <div className="cipher-section">
        <FormControl>
          <Select
            value={this.props.value}
            onChange={this.changeHandler.bind(this)}
            name="cipher"
            displayEmpty>
            <MenuItem value="0" disabled>Select Shift</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="11">11</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="13">13</MenuItem>
            <MenuItem value="14">14</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="16">16</MenuItem>
            <MenuItem value="17">17</MenuItem>
            <MenuItem value="18">18</MenuItem>
            <MenuItem value="19">19</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="21">21</MenuItem>
            <MenuItem value="22">22</MenuItem>
            <MenuItem value="23">23</MenuItem>
            <MenuItem value="24">24</MenuItem>
            <MenuItem value="25">25</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
};

export default Cipher;