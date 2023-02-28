import swal from "sweetalert";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAxiosInstance } from '../../axios/axios';
import Header from '../../components/Header/Header'
import './CreateQuoteFormPage.css'

const instance = getAxiosInstance();
const endpoint = "http://localhost:8000/api";
function CreateQuoteFormPage() {

  const [quote_text, setQuote] = useState('');
  const [author_name, setAuthor] = useState('');
  const [oustanding, setOustanding] = useState(0);
  const [imagedata, setImagedata] = useState(null);

  useEffect(() => {
    instance.get('/sanctum/csrf-cookie');
  }, []);
  
  const createQuote = async (e) => {
    e.preventDefault()
    const fData = new FormData();
    fData.append('image', imagedata);
    fData.append('author_name', author_name);
    fData.append('quote_text', quote_text);
    fData.append('oustanding', oustanding);
    await instance.post(`${endpoint}/quote`, fData);

   
    setTimeout(() => {
      setAuthor("");
      setQuote("");
      setOustanding("");
      setImagedata("");

    }, 500);

    swal("Success","Your quote has added","success"); 
  }

  return (
    <div>
     <Header/>
        <h3 className='mb-3 mt-5 title-h3'>Add Quote</h3>
        <div className='body'>
        <form onSubmit={createQuote} encType="multipart/form-data">
            <div className='mb-3 f5-input'>
                <input 
                    value={author_name}
                    onChange={ (e)=> setAuthor(e.target.value)}
                    type='text'
                    className=' label-up'
                    placeholder='Author name'
                />
                <label className='form-label'>Author</label>
            </div>
            <div className='mb-3 f5-input'>
                <input
                    value={quote_text}
                    onChange={ (e)=> setQuote(e.target.value)}
                    type='text'
                    className='label-up'
                    placeholder='Quote'
                    />
                <label className='form-label'>Quotes</label>
            </div>
            <div className='mb-3 f5-input'>
                <select defaultValue={oustanding} onChange={ (e)=> setOustanding(e.target.value)} name="select" 
                className='form-control label-up' 
                >
                  <option value="" >Choose an option</option>
                  <option value= {1} >Yes</option>
                  <option value={0}>No</option>
                </select>
                <label className='form-label'>Oustanding</label>
            </div>
            <div className='mb-3 f5-input'>
            <input 
              onChange={(e)=> setImagedata(e.target.value)}
              type='text'
              className='label-up'
              value={imagedata}
              name='image'
              id="image"
              placeholder='Add an image URL here'
              />
            <label htmlFor="image" className='form-label'>Image URL</label>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            <Link to={'/admin'}><button type='button' className='btn btn-secondary mx-2'>Cancel</button></Link>
        </form>
        </div>
    </div>
  
  )
}

export default CreateQuoteFormPage