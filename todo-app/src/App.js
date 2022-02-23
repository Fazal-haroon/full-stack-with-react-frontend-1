import React, { Component } from 'react'
import './App.css'

//Class Component
class App extends Component {
  render() {
    return (
      <div className='App'>
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    )
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

class SecondComponent extends Component {
  render() {
    return (
      <div>App 2</div>
    )
  }
}

function ThirdComponent() {
  return ( 
    <>
    App 3
    </>
  );
}

export default App;