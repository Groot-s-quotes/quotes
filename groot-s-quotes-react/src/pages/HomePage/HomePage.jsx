import React from 'react';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import Header from '../../components/Header/Header';
import QuoteComponent from '../../components/QuoteComponent/QuoteComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import PaginateComponent from '../../components/PaginateComponent/PaginateComponent';
import './HomePage'

const HomePage = () => {
  return (
    <div className="-page">
      <Header/>
      
      <CarouselComponent/>
      <SearchComponent/>
      <QuoteComponent/>
      <PaginateComponent/>
    </div>
  )
}

export default HomePage

