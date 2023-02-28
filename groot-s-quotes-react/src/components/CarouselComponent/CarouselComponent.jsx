import React from 'react';
import '../../../src/styles/Styles.css';

const CarouselComponent = (props) => {
  return (
  <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
          <h3>Steve Jobs</h3>
          <p>Innovation distinguishes between a leader and a follower</p>
      </div>
      {props.quotes.map((quote)=> (
        <div className="carousel-item">
          <h3>{quote.author_name}</h3>
          <p>{quote.quote_text}</p>
      </div>
      ))
    }  
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )  
}

export default CarouselComponent