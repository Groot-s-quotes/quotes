import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { QuotesProvider } from '../../context/QuotesContext';
import Collection from '../../components/Collection/Collection';

function CollectionsPage() {

  function clearCollections (){
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <QuotesProvider >
      <Navbar />
      <h1 className='mt-5'>Favorites Quotes</h1>
      <button className='collection-1 btn-5'  onClick={()=>clearCollections()}>Clear</button>
      <Collection />
    </QuotesProvider>
  )
}

export default CollectionsPage