import axios from 'axios';
import React, { useState } from 'react'
import Header from '../../components/Header/Header'


const endpoint = "http://localhost:8000/api";
function CreateQuoteFormPage() {

  const [quote_text, setQuote] = useState('');
  const [author_name, setAuthor] = useState('');
  const [oustanding, setOustanding] = useState(0);
  const [imagedata, setImagedata] = useState('');

  const handleChange = file => {
    setImagedata(file[0]);
  }

  const createQuote = async (e) => {
    e.preventDefault()
    const fData = new FormData();
    fData.append('image', imagedata);
    fData.append('author_name', author_name);
    fData.append('quote_text', quote_text);
    fData.append('oustanding', oustanding);
    await axios.post(`${endpoint}/quote`, fData);

   
    setTimeout(() => {
      setAuthor("");
      setQuote("");
      setOustanding("");
      setImagedata("");

    }, 1000);
  }

  return (
    <div>
     <Header/>
        <h3>Add Quote</h3>
        <form onSubmit={createQuote} enctype='multipart/form-data'>
            <div className='mb-3'>
                <label className='form-label'>Author</label>
                <input 
                    value={author_name}
                    onChange={ (e)=> setAuthor(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Quotes</label>
                <input
                    value={quote_text}
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
            <label htmlFor="image" className='form-label'>Upload</label>
            <input 
              onChange={(e)=> handleChange(e.target.files)}
              type='file'
              className='form-control'
              name='image'
              id="image"
              />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            <button type='button' className='btn btn-secondary'>Cancel</button>
        </form>
    </div>
  
  )
}

export default CreateQuoteFormPage