import React, { Component } from 'react';
import './App.css';
import HotCold from './Components/hotCold.js';
import GameTop from './Components/gameTop.js';
import GameHeader from './Components/gameHeader.js';
import GameForm from './Components/gameForm.js';
import GuessAmount from './Components/guessAmount.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Numberguess: 0,
      Colormessage: 'none',
      Otherguesses: [],
      Userinput: '',
      correctNumber: Math.floor(Math.random() * (100 - 1 + 1)) + 1
    }

  }

  render() {
    return (
      <div className="Game-site">
        <GameTop />
        <GameHeader />
        <div className="Game-body">
          <HotCold text={
            this.state.Colormessage
          } />
          <GameForm number={this.state.Numberguess} onEntry={guess => this.textEntry(guess)} onPress={entry => this.passEntry()} Otherguesses={this.state.Otherguesses} />
        </div>
      </div>
    );
  }

  textEntry(guess) {
    this.setState({
      guess
    })
    console.log('hello world', guess)
  };


  passEntry() {
    if (this.state.guess === this.state.correctNumber) {
      this.setState({ Colormessage: 'Correct!!' })
    }
    else {
      this.setState({ Colormessage: 'sorry try again' })
      if (Math.abs(this.state.guess - this.state.correctNumber) < 20) {
        this.setState({ Colormessage: 'hot' })
      }
      else
        if (Math.abs(this.state.guess - this.state.correctNumber) < 50) {
          this.setState({ Colormessage: 'warm' })
        }
        else
          if (Math.abs(this.state.guess - this.state.correctNumber) < 80) {
            this.setState({ Colormessage: 'cold' })
          }
    }
    this.setState({Otherguesses: [...this.state.Otherguesses, this.state.guess]})

    this.setState({Numberguess: this.state.Numberguess +1})

  }

}

export default App;
