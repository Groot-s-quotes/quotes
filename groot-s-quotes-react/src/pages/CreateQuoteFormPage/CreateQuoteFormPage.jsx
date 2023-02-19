import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import './CreateQuoteFormPage.css'


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
        <h3 className='mb-3 mt-5 title-h3'>Add Quote</h3>
        <div className='body'>
        <form onSubmit={createQuote} enctype='multipart/form-data'>
            <div className='mb-3 f5-input'>
                <input 
                    value={author_name}
                    onChange={ (e)=> setAuthor(e.target.value)}
                    type='text'
                    className='form-control label-up'
                    placeholder='Author name'
                />
                <label className='form-label'>Author</label>
            </div>
            <div className='mb-3 f5-input'>
                <input
                    value={quote_text}
                    onChange={ (e)=> setQuote(e.target.value)}
                    type='text'
                    className='form-control label-up'
                    placeholder='Quote'
                    />
                <label className='form-label'>Quotes</label>
            </div>
            <div className='mb-3 f5-input'>
                <select name="select" 
                className='form-control label-up' 
                >
                  <option value="Choose an option" selected>Choose an option</option>
                  <option value={oustanding} onClick={ (e)=> setOustanding(e.target.value)}>Yes</option>
                  <option value={oustanding} onClick={ (e)=> setOustanding(e.target.value)}>No</option>
                </select>
                <label className='form-label'>Oustanding</label>
            </div>
            <div className='mb-3 f5-input'>
            <input 
              onChange={(e)=> handleChange(e.target.files)}
              type='file'
              className='form-control label-up'
              name='image'
              id="image"
              />
            <label htmlFor="image" className='form-label'>Upload</label>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            <Link to={'/admin'}><button type='button' className='btn btn-secondary'>Cancel</button></Link>
        </form>
        </div>
    </div>
  
  )
}

export default CreateQuoteFormPage