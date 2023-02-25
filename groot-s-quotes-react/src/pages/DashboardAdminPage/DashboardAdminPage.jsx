import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../../src/styles/Styles.css';
import { getAxiosInstance } from '../../axios/axios';
import Navbar from '../../components/Navbar/Navbar';
import swal from "sweetalert";
import { getNumQuotes, getQuotes } from '../../services/Functions';
import AdminPagination from '../../components/AdminPagination/AdminPagination';


const instance = getAxiosInstance();
const endpoint = "http://localhost:8000/api";
function DashboardAdminPage() {
    const [quotes, setQuotes] = useState([]);
    
  const [numPages, setNumPages] = useState(0);
  const {page = 1} = useParams();

  const retrieveQuotes = async () => {
    const numQuotes = await getNumQuotes();
    const quotes = await getQuotes(page);

    setQuotes(quotes);
    setNumPages(Math.ceil(numQuotes / 3));
    
}
    useEffect(() => {
        instance.get('/sanctum/csrf-cookie');
        retrieveQuotes();
    }, []);
  
    async function onDeleteQuote(id){
        await instance.delete(`${endpoint}/quote/${id}`);
        await  retrieveQuotes();
        swal("Success","Your quote has been deleted","success"); 
    }

  return (
    <div>
        <Navbar/>
        <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='collection-1 btn-5'>Create</Link>
        </div>

        <table className='table table-striped'>
            <thead className='dash-table'>
                <tr>
                    <th>Image</th>
                    <th>Quote</th>
                    <th>Author</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                { quotes.map( (quote) => (
                    <tr key={quote.id}>
                        <td> <img src={`http://127.0.0.1:8000/storage/${quote.image}`} alt="" /> </td>    
                        <td> {quote.quote_text} </td>    
                        <td> {quote.author_name} </td>    
                        <td className='buttons-table'>
                            <Link to={`/edit/${quote.id}`} className='btn yellow-button'>Edit</Link>
                            <button onClick={ ()=>onDeleteQuote(quote.id) } className='btn red-button'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
        <AdminPagination numPages={numPages} page={page}/>
    </div>
        
    </div>
  )
}

export default DashboardAdminPage