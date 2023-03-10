import swal from "sweetalert";
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAxiosInstance } from '../../axios/axios';
import Header from '../../components/Header/Header'
import '../CreateQuoteFormPage/CreateQuoteFormPage.css'

const instance = getAxiosInstance();
const endpoint = "http://localhost:8000/api";
function EditQuoteFormPage() {
  const navigate = useNavigate();
  const [quote_text, setQuote] = useState('');
  const [author_name, setAuthor] = useState('');
  const [oustanding, setOustanding] = useState("");
  const [image, setImage] = useState('');
  const {id} = useParams();

  const updateQuote = async (e) => {
    e.preventDefault()
    await instance.put(`${endpoint}/quote/${id}`, {
      quote_text: quote_text,
        author_name: author_name,
        oustanding: oustanding,
        image:image
    })
    swal("Success","Your quote has been updated","success"); 
    navigate('/admin');
  }

  useEffect( () =>{
    instance.get('/sanctum/csrf-cookie');
    const getQuoteById = async () => {
        const response = await instance.get(`${endpoint}/quote/${id}`);
        setQuote(response.data.quote_text);
        setAuthor(response.data.author_name);
        setOustanding(response.data.oustanding);
        setImage(response.data.image)
    }
    getQuoteById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  return (
    <div>
      <Header/>
      <h3 className='mb-3 mt-5 title-h3'>Edit Quote</h3>
      <div  className='body'>
      <form onSubmit={updateQuote} encType="multipart/form-data">
            <div className='mb-3 f5-input'>
                <input 
                    value={author_name}
                    onChange={ (e)=> setAuthor(e.target.value)}
                    type='text'
                    className='label-up'
                />
                <label className='form-label'>Author</label>
            </div>
            <div className='mb-3 f5-input'>
                <input
                    value={quote_text}
                    onChange={ (e)=> setQuote(e.target.value)}
                    type='text'
                    className='label-up'
                    />
                <label className='form-label'>Quotes</label>
            </div>
            <div className='mb-3 f5-input'>
                <select name="select" value={oustanding} 
                className='form-control label-up' 
                onChange={ (e)=> setOustanding(e.target.value)}
                >
                  <option value="">Choose an option</option>
                  <option value={1} >Yes</option>
                  <option value={0} >No</option>
                </select>
                <label className='form-label'>Oustanding</label>
            </div>
            <div className='mb-3 f5-input'>
            <input 
              value= {image}
              onChange={ (e)=> setImage(e.target.value)}
              type='text'
              name='image'
              className='label-up'
              />
            <label className='form-label'>Image URL</label>
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
            <Link to={'/admin'}><button type='button' className='btn btn-secondary mx-2'>Cancel</button></Link>
        </form>
        </div>
    </div>
  )
}

export default EditQuoteFormPage