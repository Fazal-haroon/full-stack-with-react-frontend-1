import React, { Component } from "react";
import "./Counter.css";
export default class counter extends Component {
  //Define the initial state in a constructor
  //state => counter 0
  constructor() {
    super(); //this is error 1
    this.state = {
      counter: 0,
      secondCounter: 100
    };
    //this.increment = this.increment.bind(this);

  }

  render = () => { //using lambda in react we don't need bind the method to the class
    return (
      // making counter application in react js
      <div className="counter">
        <button onClick={this.increment}>+1 </button>
        <span className="count">{this.state.counter}</span>
        <span className="count">{this.state.secondCounter}</span>
      </div>
    ); 
  }
  increment = () => {//we need to bind the method to the class
    //Update state - counter++
    //console.log('increment')
    //this.state.counter++; //bad practice
    this.setState({ 
        counter: this.state.counter + 1 ,
        secondCounter: this.state.secondCounter + 1 
    });
  }
}

// foreach in javascript
// var list = [1,2,3,4]
// list.forEach ( x => console.log(2*x) )
