import React, { useEffect, useState } from 'react'
import GetQuotes from '../../services/functions';


function Main() {
    const [quotes, setQuotes] = useState([]);
    useEffect(()=>{
        GetQuotes(setQuotes)
     },[]);
  return (
    <div>
        {quotes !== [] ? (
        quotes.map(quote => (
          
            <div key={quote.id}>
                <p>{quote.quote_text}</p>
            </div>
         
        ))
            ) : ('No hay frases')}</div>
  )
}

export default Main