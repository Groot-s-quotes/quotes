import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header'


const endpoint = "http://localhost:8000/api";
function EditQuoteFormPage() {
  const [quote_text, setQuote] = useState('');
  const [author_name, setAuthor] = useState('');
  const [oustanding, setOustanding] = useState("");
  const [image, setImage] = useState('');
  const {id} = useParams();

  const updateQuote = async (e) => {
    e.preventDefault()
    await axios.put(`${endpoint}/quote/${id}`, {
      quote_text: quote_text,
        author_name: author_name,
        oustanding: oustanding,
        image:image
    })
  
  }

  useEffect( () =>{
    const getQuoteById = async () => {
        const response = await axios.get(`${endpoint}/quote/${id}`);
        setQuote(response.data.quote_text);
        setAuthor(response.data.author_name);
        setOustanding(response.data.oustanding);
        
    }
    getQuoteById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  return (
    <div>
      <Header/>
      <h3>Edit Quote</h3>
      <form onSubmit={updateQuote} enctype='multipart/form-data'>
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
                <select name="select" value={oustanding} 
                className='form-control' 
                >
                  <option value="">Choose an option</option>
                  <option value={1} onClick={ (e)=> setOustanding(e.target.value)}>Yes</option>
                  <option value={0} onClick={ (e)=> setOustanding(e.target.value)}>No</option>
                </select>
            </div>
            <div className='mb-3'>
            <label className='form-label'>Upload</label>
            <input 
              value= {image}
              onChange={ (e)=> setImage(e.target.value)}
              type='file'
              name='image'
              className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
            <button type='button' className='btn btn-secondary'>Cancel</button>
        </form>
    </div>
  )
}

export default EditQuoteFormPage