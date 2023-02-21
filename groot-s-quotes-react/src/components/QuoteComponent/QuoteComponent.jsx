import React from 'react';
import '../../../src/styles/Styles.css';

import LikeComponent from '../LikeComponent/LikeComponent';

const QuoteComponent = (props) => {
 
  return (
      <div className="quote-container">
        <div className="card">
          { props.quotes!== null ? (
            props.quotes.map((quote)=> (
              <div className="quote-like-container" key={quote.id}>
                <div>
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={quote.image} alt="Card cap" className="img-fluid rounded-start"/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{quote.author_name}</h5>
                          <p className="card-text">{quote.quote_text}</p>
                        </div>   
                      </div>
                    </div>
                  </div>
                </div>
                <LikeComponent/>
              </div>
            ))):
            ('There is no Quotes')
          }
        </div>
      </div>
        
        
    
  )
}

export default QuoteComponent