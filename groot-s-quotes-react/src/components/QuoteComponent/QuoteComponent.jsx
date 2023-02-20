import React from 'react';
import '../../../src/styles/Styles.css';
import { getQuotes } from '../../services/Functions';
import { useState, useEffect } from 'react';
import LikeComponent from '../LikeComponent/LikeComponent';

const QuoteComponent = () => {
  const [quotes, setQuotes] = useState([]);

    const getAllQuotes = async () => {
        const allQuotes = await getQuotes();
        setQuotes(allQuotes.data);
        
    }
    useEffect(() => {
        getAllQuotes();
    }, []);
    console.log(quotes)
  return (
      <div className="quote-container">
        <div className="card">
          { quotes!== null ? (
            quotes.map((quote)=> (
              <div className="quote-like-container">
                <div key={quote.id}>
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