import React from 'react'

const SearchComponent = (props) => {
  const {handleSubmit, handleInputChange} = props;

  return ( 
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <div className="input-group w-50">
        <div className="input-group-prepend">
            <input type="submit" className="btn btn-outline-secondary" value="Search" />
        </div>
            <input type="text" name="author" className="form-control" placeholder="author" aria-label="" aria-describedby="basic-addon1" onChange={handleInputChange}/>
      </div>
    </form>
    
  
  )
}

export default SearchComponent