import React from 'react'
import { useState} from 'react';

const SearchComponent = (props) => {
  const {handleSubmit, handleInputChange} = props;

  return ( 
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
            <input type="submit" className="btn btn-outline-secondary" value="Search" />
        </div>
            <input type="text" name="author" className="form-control" placeholder="author" aria-label="" aria-describedby="basic-addon1" onChange={handleInputChange}/>
      </div>
    </form>
    
  
  )
}

export default SearchComponent