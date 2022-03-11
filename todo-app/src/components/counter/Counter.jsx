import React, { Component } from "react";
import "./Counter.css";
export default class counter extends Component {
  //Define the initial state in a constructor
  //state => counter 0
  constructor() {
    super(); //this is error 1
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  
  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+1 </button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
  increment() {
    //Update state - counter++
    //console.log('increment')
    //this.state.counter++; //bad practice
    this.setState({ 
        counter: this.state.counter + 1 
    });
  }
}
