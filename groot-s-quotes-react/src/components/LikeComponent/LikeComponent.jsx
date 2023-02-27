import React from 'react';
import '../../../src/styles/Styles.css';
import { useState } from 'react';

const LikeComponent = ({ quote, addToCollection, inFavorites}) => {
    const [isActive, setActive] = useState(inFavorites);

    const ToggleClass = () => {
        setActive(!isActive); 
        addToCollection(quote);
    };
    
    return ( 
        <div className="placement">
            <div className={!isActive ? "heart" : "is-active heart"} onClick={ToggleClass}></div>
        </div>
    )   
}

export default LikeComponent