import React from 'react'
import { Link } from 'react-router-dom'

function Collection() {
  return (
    <>
    <Link to="/collections" >
    <button type="submit" className='collection-1 btn-5'>
         <span>Collection</span>
    </button>
    </Link>
    </>
  )
}

export default Collection