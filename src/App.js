import React, {Component} from 'react';
import Text from './components/Text';
import Encryption from './components/Encryption';
import Cipher from './components/Cipher';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      cipher: 0,
      encryption: ''
    };
  }

  changeText(str) {
    this.setState({text: str});
    this.encrypt(str, parseInt(this.state.cipher));
  }

  changeCipher(data) {
    this.setState({cipher: data})
    this.encrypt(this.state.text, parseInt(data));
  }

  encrypt(text, cipher) {
    let result = '';
    for (let i=0; i<text.length; i++) {
      const char = text.charCodeAt(i);
      let position = char;
      if (char >= 65 && char <= 90) {
        position = ((char - 65 + cipher) % 26) + 65;
      } else if (char >= 97 && char <= 122) {
        position = ((char - 97 + cipher) % 26) + 97;
      } 
      result += String.fromCharCode(position);
    }
    this.setState({encryption: result});
  }

  render() {
    return (
      <div className="main">
        <div className="top-section">
          <h1>Caesar's Cipher</h1>
          <Cipher value={this.state.cipher} onChange={this.changeCipher.bind(this)}></Cipher>
        </div>
        <Paper elevation={6} className="paper-container">
          <Text value={this.state.text} onChange={this.changeText.bind(this)}></Text>
          <Encryption value={this.state.encryption}></Encryption>
        </Paper>
      </div>
    );
  }
}

export default App;
