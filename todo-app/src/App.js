import React, { Component } from 'react'
import FirstComponent, {FirstComponentPart} from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
import './App.css'

//Class Component
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
      </div>
    )
  }
}
class LearningComponents extends Component {
  render() {
    return (
    <>
        <FirstComponent />
        <FirstComponentPart />
        <SecondComponent />
        <ThirdComponent />
    </>
    )
  }
}

export default App;