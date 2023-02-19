import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { deleteQuote, getQuotes } from '../../services/Functions';

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
        <Header/>
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
                        <td> <img src={`http://localhost:8000/uploadImg/${quote.image}`} alt="" /> </td>    
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