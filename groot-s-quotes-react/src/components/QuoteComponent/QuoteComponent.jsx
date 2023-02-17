import React from 'react';
import '../../../src/styles/Styles.css';
import { getQuotes } from '../../services/Functions';
import { useState, useEffect } from 'react';

const QuoteComponent = () => {
  const [quotes, setQuotes] = useState([]);

    const getAllQuotes = async () => {
        const allQuotes = await getQuotes();
        setQuotes(allQuotes);
    }
    useEffect(() => {
        getAllQuotes();
    }, []);
  return (
    
        <div className="card">
          { quotes!== null ? (
            quotes.map((quote)=> (
              <div key={quote.id}>
                <img className="card-img-top" src={quote.image} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{quote.author_name}</h5>
                    <p className="card-text">{quote.quote_text}</p>
                    <a href="/" className="btn btn-warning">Heart</a>
                </div>
              </div>
            ))):
            ('There is no Quotes')
          }
        </div>
        
    
  )
}

export default QuoteComponent