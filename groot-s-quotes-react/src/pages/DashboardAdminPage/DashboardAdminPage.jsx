import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../src/styles/Styles.css';
import Navbar from '../../components/Navbar/Navbar';
import { deleteQuote, getQuotes } from '../../services/Functions';
const url = 'http://localhost:8000/storage';
function DashboardAdminPage() {
    const [quotes, setQuotes] = useState([]);

    const getAllQuotes = async () => {
        const allQuotes = await getQuotes();
        setQuotes(allQuotes);
    }
    useEffect(() => {
        getAllQuotes();
    }, []);
  
    async function onDeleteQuote(id){
        await deleteQuote(id);
        await getAllQuotes();
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
                        <td>
                            <Link to={`/edit/${quote.id}`} className='btn yellow-button'>Edit</Link>
                            <button onClick={ ()=>onDeleteQuote(quote.id) } className='btn red-button'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>

    </div>
  )
}

export default DashboardAdminPage