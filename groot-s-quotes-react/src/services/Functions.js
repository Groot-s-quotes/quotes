import axios from "axios";

const endpoint = "http://localhost:8000/api";
axios.defaults.headers.post['Content-Type']= 'application/json';
axios.defaults.headers.post['Accept']= 'application/json';
const getQuotes = async () => {
  const response = await axios.get(`${endpoint}/quotes`);
  return response.data;
};


export {
  getQuotes
};
