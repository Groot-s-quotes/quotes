import React from 'react'
import './CollectionsPage.css'
import Navbar from '../../components/Navbar/Navbar';
import { QuotesProvider } from '../../context/QuotesContext';
import Collection from '../../components/Collection/Collection';

function CollectionsPage() {

  return (
    <QuotesProvider >
      <Navbar />
      <h1 className='mt-5'>Favorites Quotes</h1>
      <Collection />
    </QuotesProvider>
  )
}

export default CollectionsPage