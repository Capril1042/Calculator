import React, { Component } from 'react';
import Display from './Display';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Calculator">
       <Display/>
       </div>
      </div>
    );
  }
}

export default App;
