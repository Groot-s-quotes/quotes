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

export {
  getQuotes, getNumQuotes
};
