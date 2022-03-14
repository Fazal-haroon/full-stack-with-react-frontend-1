import React, { Component } from "react";
import "./Counter.css";
export default class counter extends Component {
  //Define the initial state in a constructor
  //state => counter 0
  constructor() {
    super(); //this is error 1
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);

  }

  render() { 
    return (
      // making counter application in react js
      <div className="counter">
        <button style={{padding : "15px 30px"}} onClick={this.increment}>+{this.props.by}</button>
        <span style={{fontSize : "50px"}} className="count">{this.state.counter}</span> 
        {/* //css style will convert from style="font-size: 100px" to style={{fontSize:"100px"}} */}
      </div>
    ); 
  }
  increment() {//we need to bind the method to the class
    //Update state - counter++
    //console.log('increment')
    //this.state.counter++; //bad practice
    this.setState({ 
        counter: this.state.counter + this.props.by
    });
  }
}

// foreach in javascript
// var list = [1,2,3,4]
// list.forEach ( x => console.log(2*x) )
