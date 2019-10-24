import React, {useState} from 'react';
import Text from './components/Text';
import Encryption from './components/Encryption';
import Cipher from './components/Cipher';
import Paper from '@material-ui/core/Paper';

function App(props) {
  const [text, setST] = useState('');
  const [encryption, setSE] = useState('');
  const [cipher, setSC] = useState(0);

  const changeText = (str) => {
    setST(str);
    encrypt(str, parseInt(cipher));
  }

  const changeCipher = (data) => {
    setSC(data);
    encrypt(text, parseInt(data));
  }

  const encrypt = (text, cipher) => {
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
    setSE(result);
  }

  return (
    <div className="main">
      <div className="top-section">
        <h1>Caesar's Cipher</h1>
        <Cipher value={cipher} onChange={changeCipher.bind(this)}></Cipher>
      </div>
      <Paper elevation={6} className="paper-container">
        <Text value={text} onChange={changeText.bind(this)}></Text>
        <Encryption value={encryption}></Encryption>
      </Paper>
    </div>
  );
}

export default App;
