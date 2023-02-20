import React from 'react';
import './HomePage'
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import Navbar from '../../components/Navbar/Navbar';
import QuoteComponent from '../../components/QuoteComponent/QuoteComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import PaginateComponent from '../../components/PaginateComponent/PaginateComponent';
import Header from '../../components/Header/Header';
import LikeComponent from '../../components/LikeComponent/LikeComponent';
import SignInButton from '../../components/SignInButton/SignInButton';
import LogInButton from '../../components/LogInButton/LogInButton';

const HomePage = () => {
  return (
    <>
      <div class="">
        <Header>
         <Navbar/>
        <div class="d-flex ">
          <LikeComponent/>
          <SignInButton class="text-color"/>
          <LogInButton/>
        </div>
        </Header>
      </div>
      <CarouselComponent/>
      <SearchComponent/>
      <QuoteComponent/>
      <PaginateComponent/>
    </>
  )
}

export default HomePage

