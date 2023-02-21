import React from 'react';
import './HomePage'
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import Navbar from '../../components/Navbar/Navbar';
import QuoteComponent from '../../components/QuoteComponent/QuoteComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import PaginateComponent from '../../components/PaginateComponent/PaginateComponent';

const HomePage = () => {
  return (
      <div>
         <Navbar/>
      <CarouselComponent/>
      <SearchComponent/>
      <QuoteComponent/>
      <PaginateComponent/>
    </div>
  )
}

export default HomePage

