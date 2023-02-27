import React from 'react';
import './HomePage';

import { getNumQuotes, getQuotes, getAuthorNumQuotes, getAuthorQuotes } from '../../services/Functions';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import Navbar from '../../components/Navbar/Navbar';
import QuoteComponent from '../../components/QuoteComponent/QuoteComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import PaginateComponent from '../../components/PaginateComponent/PaginateComponent';

const HomePage = () => {
  const [quotes, setQuotes] = useState([]);
  const [numPages, setNumPages] = useState(0);
  const [formData, setFormData] = useState({});
  const {page = 1} = useParams();


  const retrieveQuotes = async () => {
      const numQuotes = await getNumQuotes();
      const quotes = await getQuotes(page);

      setQuotes(quotes);
      setNumPages(Math.ceil(numQuotes / 3));
      
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authorName = formData.author.toLowerCase();
    const numQuotes = await getAuthorNumQuotes(authorName);
    const quotes = await getAuthorQuotes(1, authorName);

    setQuotes(quotes);
    setNumPages(Math.ceil(numQuotes / 3));

  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;

    setFormData({...formData, [name]: value});
  };

  useEffect(() => {
      retrieveQuotes();
  }, []);

  return (
    <>
      <Navbar/>
      <CarouselComponent/>
      <SearchComponent handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
      <QuoteComponent quotes={quotes}/>
      <PaginateComponent numPages={numPages} page={page}/>
    </>

  )
}

export default HomePage

