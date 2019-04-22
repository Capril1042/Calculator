import React, { Component } from 'react';
import Display from './Display';
import KeyPad from './KeyPad';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Calculator">
       <Display/>
       <KeyPad/>
       </div>
      </div>
    );
  }
}

export default App;
