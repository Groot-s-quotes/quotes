const URL = " https://localhost:8001/api/quotes"

const GetQuotes = (state) => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => state(data))
      .catch((error) => {
        console.log(error);
      });
  };
  
  export default GetQuotes;