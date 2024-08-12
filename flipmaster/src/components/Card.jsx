import React, { useState } from 'react';
import './card.css';

function Card() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = ({props}) => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flip-card" onClick={handleClick}>
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">


                </div>
                <div className="flip-card-back">


                </div>
            </div>
        </div>
    );
}

export default Card;
