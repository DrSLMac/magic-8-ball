import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import EightBall from './EightBall'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      fortune: ['It is certain', 'It is decidely so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'All signs point to yes'],
      result: ''
  }
  }

  newFortune = () => {
    this.setState({ result: this.state.fortune[Math.floor(Math.random() * this.state.fortune.length)] })
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <EightBall result={this.state.result} newFortune={this.newFortune}/>
      </main>
    )
  }
}

export default App