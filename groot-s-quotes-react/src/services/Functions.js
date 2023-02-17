import axios from 'axios';

const endpoint = "http://localhost:8000/api";

const getQuotes = async () => {
    const response = await axios.get(`${endpoint}/quotes`);
    return response.data;
}

const createQuote = async () => {
    const response = await axios.post(`${endpoint}/quote`);
    return response.data.json;
}

const deleteQuote = async (id) => {
    await axios.delete(`${endpoint}/quote/${id}`);
    getQuotes();
}

export {
    getQuotes,
    createQuote,
    deleteQuote
}