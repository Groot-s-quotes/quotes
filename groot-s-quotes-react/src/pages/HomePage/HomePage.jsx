import React from 'react';
import './HomePage'
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import Navbar from '../../components/Navbar/Navbar';
import QuoteComponent from '../../components/QuoteComponent/QuoteComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import PaginateComponent from '../../components/PaginateComponent/PaginateComponent';
import LikeComponent from '../../components/LikeComponent/LikeComponent';
import SignInButton from '../../components/SignInButton/SignInButton';
import LogInButton from '../../components/LogInButton/LogInButton';

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <CarouselComponent/>
        <SearchComponent/>
        <QuoteComponent/>
        <PaginateComponent/>
    </>
  )
}

export default HomePage

