import React from 'react'
import './CollectionsPage.css'
import Navbar from '../../components/Navbar/Navbar';

function CollectionsPage() {
  let listOfQuotes = sessionStorage.getItem('quotesSelected');
  const quotesList = JSON.parse(listOfQuotes)
  console.log(quotesList);

  return (
    <>
      <Navbar />
      <h1 className='mt-5'>Favorites Quotes</h1>
    <div className='collections-container'>
    
  {quotesList!== null ? (
  quotesList.map((quote) => (
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

export default CollectionsPage