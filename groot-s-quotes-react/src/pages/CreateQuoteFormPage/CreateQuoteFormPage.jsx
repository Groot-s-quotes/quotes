import axios from 'axios';
import React, { useState } from 'react'
import Header from '../../components/Header/Header'


const endpoint = "http://localhost:8000/api";
function CreateQuoteFormPage() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [oustanding, setOustanding] = useState(0);
  const [image, setImage] = useState('');

  const createQuote = async (e) => {
    e.preventDefault()
    await axios.post(`${endpoint}/quote`, {author:author, quote:quote, oustanding:oustanding, image:image});
  }

  return (
    <div>
     <Header/>
        <h3>Add Quote</h3>
        <form onSubmit={createQuote}>
            <div className='mb-3'>
                <label className='form-label'>Author</label>
                <input 
                    value={author}
                    onChange={ (e)=> setAuthor(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Quotes</label>
                <input
                    value={quote}
                    onChange={ (e)=> setQuote(e.target.value)}
                    type='text'
                    className='form-control'
                    />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Oustanding</label>
                <select name="select" 
                className='form-control' 
                >
                  <option value="Choose an option" selected>Choose an option</option>
                  <option value={oustanding} onClick={ (e)=> setOustanding(e.target.value)}>Yes</option>
                  <option value={oustanding} onClick={ (e)=> setOustanding(e.target.value)}>No</option>
                </select>
            </div>
            <div className='mb-3'>
            <label className='form-label'>Upload</label>
            <input 
              value= {image}
              onChange={ (e)=> setImage(e.target.value)}
              type='file'
              className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            <button type='button' className='btn btn-secondary'>Cancel</button>
        </form>
    </div>
  
  )
}

export default CreateQuoteFormPage