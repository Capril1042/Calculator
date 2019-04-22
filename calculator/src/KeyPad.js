import React, { Component } from 'react';

class KeyPad extends Component {
  render() {
    return (
      <div className="KeyPad">
      <button className="item util" onClick={this.props.handleClick} value="AC"> AC</button>
      <button className="item util" onClick={this.props.handleClick} value="+/-">+/-</button>
      <button className="item util" onClick={this.props.handleClick} value="%">%</button>
      <button className="item opp" onClick={this.props.handleClick} value="/">÷</button>
      <button className="item num" onClick={this.props.handleNumber} value="7">7</button>
      <button className="item num" onClick={this.props.handleNumber} value="8">8</button>
      <button className="item num" onClick={this.props.handleNumber} value="9">9</button>
      <button className="item opp" onClick={this.props.handleClick} value="*">x</button>
      <button className="item num" onClick={this.props.handleNumber} value="4">4</button>
      <button className="item num" onClick={this.props.handleNumber} value="5">5</button>
      <button className="item num" onClick={this.props.handleNumber} value="6">6</button>
      <button className="item opp" onClick={this.props.handleClick} value="-">-</button>
      <button className="item num" onClick={this.props.handleNumber} value="1">1</button>
      <button className="item num" onClick={this.props.handleNumber} value="2">2</button>
      <button className="item num" onClick={this.props.handleNumber} value="3">3</button>
      <button className="item opp" onClick={this.props.handleClick} value="+">+</button>
      <button className="item0 num" onClick={this.props.handleNumber} value="0">0</button>
      <button className="item num" onClick={this.props.handleNumber} value=".">.</button>
      <button className="item opp" onClick={this.props.total} value="=">=</button>
      
      </div>
    );
  }
}

export default KeyPad;