import React from 'react';
import './HomePage';

import { getNumQuotes, getQuotes } from '../../services/Functions';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import swal from "sweetalert";
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import Navbar from '../../components/Navbar/Navbar';
import QuoteComponent from '../../components/QuoteComponent/QuoteComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import PaginateComponent from '../../components/PaginateComponent/PaginateComponent';

const HomePage = () => {
  const [quotes, setQuotes] = useState([]);
  const [numPages, setNumPages] = useState(0);
  const {page = 1} = useParams();
  const [quotesItem, setQuotesItem]= useState(() => {
    try {
        const quotesinsessionstorage = sessionStorage.getItem("quotesSelected");
        return quotesinsessionstorage ? JSON.parse(quotesinsessionstorage) : [];
    } catch (error) {
        console.log(error)
    }
    
})

  const retrieveQuotes = async () => {
      const numQuotes = await getNumQuotes();
      const quotes = await getQuotes(page);

      setQuotes(quotes);
      setNumPages(Math.ceil(numQuotes / 3));
      
  }
  useEffect(() => {
      retrieveQuotes();
      sessionStorage.setItem("quotesSelected", JSON.stringify(quotesItem));
  }, [quotesItem]);

  const addToCollection = (quote) => {
    const inCollection = quotesItem.find(
        (quoteInCollection) => quoteInCollection.id === quote.id
        );
          
          if (inCollection) {
              return (
                swal("Warning","This quote is already exist in your collections","warning"));
            };
                  
            if (quotesItem && quotesItem.length < 10) {
                setQuotesItem([...quotesItem, {...quote}])
                return
            }
            swal("Warning","You added more than 8 quotes to your favorites","warning");

          };
          console.log(quotesItem);
  return (
    <>
      <Navbar/>
      <CarouselComponent/>
      <SearchComponent/>
      <QuoteComponent quotes={quotes} addToCollection={addToCollection}/>
      <PaginateComponent numPages={numPages} page={page}/>
    </>

  )
}

export default HomePage

