import React, { Component } from 'react';

class KeyPad extends Component {
  render() {
    return (
      <div className="KeyPad">
      <button className="item util"> AC</button>
      <button className="item util">+/-</button>
      <button className="item util">%</button>
      <button className="item opp">÷</button>
      <button className="item num">7</button>
      <button className="item num">8</button>
      <button className="item num">9</button>
      <button className="item opp">x</button>
      <button className="item num">4</button>
      <button className="item num">5</button>
      <button className="item num">6</button>
      <button className="item opp">-</button>
      <button className="item num">1</button>
      <button className="item num">2</button>
      <button className="item num">3</button>
      <button className="item opp">+</button>
      <button className="item0 num">0</button>
      <button className="item num">.</button>
      <button className="item opp">=</button>
      
      </div>
    );
  }
}

export default KeyPad;