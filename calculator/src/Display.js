import React, { Component } from 'react';
import KeyPad from './KeyPad';

class Display extends Component {
    constructor(){
        super();
        this.state = {
            inputA: null,
            inputB: null,
            result: null,
            operator: '',
            display: 0,
            wating: false

        };
    }

handleNumber=(e)=>{
e.preventDefault();
if (!this.state.waiting && this.state.inputA === null) {
this.setState({
    inputA: e.target.value,
    display: e.target.value,
    result: Number(e.target.value)
})
} else 
if(!this.state.waiting && this.state.inputA !== null) {
    this.setState({
    inputA: this.state.inputA + e.target.value,
    display: this.state.inputA + e.target.value,
    result: Number(this.state.inputA + e.target.value)

    })
} else 
if(this.state.waiting && this.state.inputB === null) {
    this.setState({
    inputB: e.target.value,
    display: e.target.value,
    result:Number(e.target.value),
    })
} else {
   this.setState({
    inputB: this.state.inputB + e.target.value,
    display: this.state.inputB + e.target.value  ,
    result:Number(this.state.inputB + e.target.value)
    }) 
}

}

handleClick=(e)=>{
e.preventDefault();
switch (e.target.value){
    case "AC":
        this.setState({
            inputA: null,
            inputB: null,
            result: null,
            operator: '',
            display: 0,
            wating: false
        });
        break;
    case "+/-":
        this.setState({
            result: this.state.result*-1,
            display: this.state.result*-1,
        })
        break;
    case "%" :
        this.setState({ 
           result: this.state.result / 100,
           display: this.state.result /100,
        })
        break;
    case "/" :
        this.setState({
        waiting: true,
        operator: "/" ,
        })
        break;
    case "*" :
        this.setState({
        waiting: true,
        operator: "*" ,
       })
        break;
    case "-" :
        this.setState({
        waiting: true,
        operator: "-" ,
       })
        break;
    case "+" :
        this.setState({
        waiting: true,
        operator: "+" ,
       })   
        break;
    default :
        break;
}
}

total=()=> {
    switch (this.state.operator) {
       case "/" : 
            let divideResult = Number(this.state.inputA) / Number(this.state.inputB);
                this.setState({
                    result: divideResult,
                    display: divideResult,
                    inputA: divideResult,
                    inputB: null,
                    waiting: false
                })
                break;
            case "x" :
                let timesResult = Number(this.state.inputA) * Number(this.state.inputB);
                this.setState({
                    result: timesResult,
                    display: timesResult,
                    inputA: timesResult,
                    inputB: null,
                    waiting: false
                })
                break;
            case "-" :
                let minusResult = Number(this.state.inputA) - Number(this.state.inputB);
                this.setState({
                    result: minusResult,
                    display: minusResult,
                    inputA: minusResult,
                    inputB: null,
                    waiting: false
                })
                break;
             case "+" :
                let plusResult = Number(this.state.inputA) + Number(this.state.inputB);
                this.setState({
                    result: plusResult,
                    display: plusResult,
                    inputA: plusResult,
                    inputB: null,
                    waiting: false
                })
                break;
            default :
                break;
        }

}
  render() {
      console.log(`inputA: ${this.state.inputA}`)
      console.log(`inputB: ${this.state.inputB}`)
      console.log(`result: ${this.state.result}`)
      console.log(`display: ${this.state.display}`)
      console.log(`operator: ${this.state.operator}`)

    return (
        <div>
            <div className="Display">
                {this.state.display}
            </div>
            <div>
                <KeyPad handleClick={this.handleClick} handleNumber={this.handleNumber} total={this.total}/>
            </div>
      </div>
    );
  }
}

export default Display;