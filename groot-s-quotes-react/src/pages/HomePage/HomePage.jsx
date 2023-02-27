import React from 'react';
import './HomePage';

import { getNumQuotes, getQuotes } from '../../services/Functions';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import Navbar from '../../components/Navbar/Navbar';
import QuoteComponent from '../../components/QuoteComponent/QuoteComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import PaginateComponent from '../../components/PaginateComponent/PaginateComponent';
import { QuotesProvider } from '../../context/QuotesContext';


const HomePage = () => {
  const [quotes, setQuotes] = useState([]);
  const [numPages, setNumPages] = useState(0);
  const {page = 1} = useParams();
 

  const retrieveQuotes = async () => {
      const numQuotes = await getNumQuotes();
      const quotes = await getQuotes(page);

      setQuotes(quotes);
      setNumPages(Math.ceil(numQuotes / 3));
      
  }

  useEffect(() => {
      retrieveQuotes();
  }, []);

  
  return (
    <QuotesProvider>
      <Navbar/>
      <CarouselComponent/>
      <SearchComponent/>
      <QuoteComponent quotes={quotes} />
      <PaginateComponent numPages={numPages} page={page}/>
    </QuotesProvider>

  )
}

export default HomePage

