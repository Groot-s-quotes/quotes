import React, { useContext } from 'react'
import { QuotesContext } from '../../context/QuotesContext'
import './Collection.css';

function Collection() {
  const {quotesItem} = useContext(QuotesContext);
  return (
    <>
    <div className='collections-container'>
    
    {quotesItem!== null ? (
    quotesItem.map((quote) => (
      <div className="card collections-style" key={quote.id}>
      <img src={quote.image} className="card-img-top img-fluid" alt='' />
      <div className="card-body">
        <p className="card-text">{quote.quote_text}</p>
        <p className="card-text">{quote.author_name}</p>
      </div>
    </div>   
    ))):
    ('There are no Quotes')
  }
      </div>
    </>
  )
}

export default Collection