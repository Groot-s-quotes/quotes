import React from 'react';
import '../../../src/styles/Styles.css';
import { useState } from 'react';

const LikeComponent = ({addToCollection, quote}) => {
    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive); 
        addToCollection(quote);
    };
    
    return ( 
        <div className="placement">
            <div className={isActive ? "heart" : "is-active heart"} onClick={ToggleClass}></div>
        </div>
    )   
}

export default LikeComponent