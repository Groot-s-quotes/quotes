import axios from "axios";

const endpoint = "http://localhost:8000/api";

axios.defaults.headers.post['Content-Type']= 'application/json';
axios.defaults.headers.post['Accept']= 'application/json';

const getNumQuotes = async () => {
  const response = await axios.get(`${endpoint}/num-quotes`);
  return response.data;
};

const getQuotes = async (page) => {
  const response = await axios.get(`${endpoint}/quotes/${page}`);
  return response.data;
};

const getAuthorQuotes = async (page, author_name) => {
  const response = await axios.get(`${endpoint}/quotes/search/${page}?author=${author_name}`);
  return response.data
}

const getAuthorNumQuotes = async (author_name) => {
  const response = await axios.get(`${endpoint}/num-quotes?author=${author_name}`);
  return response.data;
};

export {
  getQuotes, getNumQuotes, getAuthorQuotes, getAuthorNumQuotes
};
