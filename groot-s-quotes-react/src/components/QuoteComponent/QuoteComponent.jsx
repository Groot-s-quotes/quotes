import React, { useContext } from 'react';
import '../../../src/styles/Styles.css';
import { QuotesContext } from '../../context/QuotesContext';

import LikeComponent from '../LikeComponent/LikeComponent';

const QuoteComponent = ({quotes}) => {
 const {addToCollection, quotesItem} = useContext(QuotesContext);
 const isLogged = localStorage.getItem('auth_token');

 const findQuote = (id) => quotesItem.find((quote) => quote.id === id);
  return (
      <div className="quote-container d-flex justify-content-center mt-5">
        <div className="mb-2">
          { quotes!== null ? (
            quotes.map((quote)=> (
        
                  <div key={quote.id} className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={quote.image} alt="card cap" className="img-fluid rounded-start quote-image"/>
                      </div>
                      <div className="col-md-8 h-25">
                        <div className="card-body">
                          <h5 className="card-title">{quote.author_name}</h5>
                          <p className="card-text font" >{quote.quote_text}</p>
                        </div>   
                      </div>
                    </div>
                  
                { isLogged ?
                  <LikeComponent addToCollection={addToCollection} quote={quote} inFavorites={findQuote(quote.id)} /> : null
                }
              </div>
            ))):
            ('There is no Quotes')
          }
        </div>
      </div>  
  )
}

export default QuoteComponent