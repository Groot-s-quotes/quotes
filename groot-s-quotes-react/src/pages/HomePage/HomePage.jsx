import React from 'react';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import Navbar from '../../components/Navbar/Navbar';
import QuoteComponent from '../../components/QuoteComponent/QuoteComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import './HomePage'

const HomePage = () => {
  return (
    <div className="-page">
      <Navbar/>
      
      <CarouselComponent/>
      <SearchComponent/>
      <QuoteComponent/>
    </div>
  )
}

export default HomePage

