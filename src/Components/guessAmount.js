import React from 'react';

import './guessAmount.css';

export default function GuessAmount(props) {
    return(
        <div className="Guess-amount hidden">
            <h2>Guess # {props.number}</h2>
            </div>
    )};
    GuessAmount.defaultProps = {
        number: '0'
    };