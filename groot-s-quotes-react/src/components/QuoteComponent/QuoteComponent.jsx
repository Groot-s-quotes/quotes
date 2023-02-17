import React from 'react';
import groot from '../../assets/images/groot_logo.png';
import '../../../src/styles/Styles.css';


const QuoteComponent = () => {
  return (
    
        <div className="card">
            <img className="card-img-top" src={groot} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-warning">Heart</a>
            </div>
        </div>
        
    
  )
}

export default QuoteComponent