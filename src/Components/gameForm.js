import React from 'react';

import './gameForm.css';
import PreviousGuesses from './previousGuesses.js'
import GuessAmount from './guessAmount.js'

export default class extends React.Component {


    onSubmit(event) {
        event.preventDefault();
        this.props.onEntry(event.target.value)
        console.log(event.target.value)
    }

    buttonPress(event) {
        event.preventDefault();
        this.props.onPress(event.target.value)
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="Game-form">
                <input type="text" onChange ={(e) => this.onSubmit(e)}/>
                <button onClick={(e) => this.buttonPress(e)}>Enter Your Guess!</button>
                <GuessAmount number={this.props.number} />
                <PreviousGuesses previous={this.props.list} Otherguesses={this.props.Otherguesses}/>
            </div>
        )
        
    }
};
