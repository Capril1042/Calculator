import React, { Component } from 'react';
import KeyPad from './KeyPad';

class Display extends Component {
    constructor(){
        super();
        this.state = {
            inputA: null,
            inputB: null,
            result: 0,
            operator: null,
            // display: 0,
            

        };
    }

handleNumber=(e)=>{
e.preventDefault();
let  valueA = this.state.inputA === null ?
e.target.value :
this.state.inputA + e.target.value;

let  valueB = this.state.inputB === null ?
e.target.value :
this.state.inputB + e.target.value;

if (this.state.operator === null) {
this.setState({
    inputA: valueA,
    // display: valueA,
    result: valueA
})
} 
if(this.state.operator !== null) {
    this.setState({
    inputB: valueB,
    // display: valueB,
    result: Number(valueB)
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
            result: 0,
            operator: null,
            waiting: false
        });
        break;
    case "+/-":
        let neg = Number(this.state.inputA * -1)
        this.setState({
            result: neg,
            inputA: neg
        })
        break;
    case "%" :
        this.setState({ 
           result: this.state.result / 100,
        //    display: this.state.result /100,
        })
        break;
    case "/" :
        this.setState({
        waiting: true,
        operator: "/" ,
        })
        break;
    case "x" :
        this.setState({
        waiting: true,
        operator: "x" ,
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
    case "p" :
     let powerResult = Number(this.state.inputA) * Number(this.state.inputA);
         this.setState({
                    result: powerResult,
                    // display: powerResult,
                    inputA: powerResult
                })
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
                    // display: divideResult,
                    inputA: divideResult,
                    inputB: null,
                    operator: null
                })
                break;
            case "x" :
                let timesResult = Number(this.state.inputA) * Number(this.state.inputB);
                this.setState({
                    result: timesResult,
                    // display: timesResult,
                    inputA: timesResult,
                    inputB: null,
                    operator: null
                })
                break;
            case "-" :
                let minusResult = Number(this.state.inputA) - Number(this.state.inputB);
                this.setState({
                    result: minusResult,
                    // display: minusResult,
                    inputA: minusResult,
                    inputB: null,
                    operator: null
                })
                break;
             case "+" :
                let plusResult = Number(this.state.inputA) + Number(this.state.inputB);
                this.setState({
                    result: plusResult,
                    // display: plusResult,
                    inputA: plusResult,
                    inputB: null,
                    operator: null
                })
                break;
            // case "p" :
            // let powerResult =Number(this.state.inputA) * Number(this.state.inputA);
            //     this.setState({
            //         result: powerResult,
            //         display: powerResult,
            //         inputA: powerResult
            //     })
            default :
                break;
        }

}
  render() {
      console.log(`inputA: ${this.state.inputA}`)
      console.log(`inputB: ${this.state.inputB}`)
      console.log(`result: ${this.state.result}`)
    //   console.log(`display: ${this.state.display}`)
      console.log(`operator: ${this.state.operator}`)
     

    return (
        <div>
            <div className="Display">
                {this.state.result}
            </div>
            <div>
                <KeyPad handleClick={this.handleClick} handleNumber={this.handleNumber} total={this.total}/>
            </div>
      </div>
    );
  }
}

export default Display;