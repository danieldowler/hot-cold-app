import React from 'react';

import './hotCold.css';

export default function HotCold(props){
return( 
<div className="hot-Cold">
    <h2>{props.text}</h2>
</div>)
}

HotCold.defaultProps = {
    text: 'Take a Guess!!'
};