import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/styles/Styles.css';

const WatchQuotesButton = () => {
  return (
    
    <Link to={'/home'} className="collection-1 btn-39">
        <button className="watch">
          <span></span>
          <span></span>
          <span>W</span>
          <span>a</span>
          <span>t</span>
          <span>c</span>
          <span>h</span>
          <span></span>
          <span></span>
          <span>q</span>
          <span>u</span>
          <span>o</span>
          <span>t</span>
          <span>e</span>
          <span>s</span>
        </button>
    </Link>

    
  )
}

export default WatchQuotesButton