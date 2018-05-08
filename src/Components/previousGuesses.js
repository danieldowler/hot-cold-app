import React from 'react';

import './previousGuesses.css';

export default function PreviousGuesses(props) {
    const FormerGuesses = props.Otherguesses.map((list) => <p>{list}</p>
    );
    return (
        <div className="Previous-guesses">
            <h1>Previous Guesses</h1>
            <h2>{FormerGuesses}</h2>
        </div>
    )
};

PreviousGuesses.defaultProps = {
    Otherguesses: []
};



