import { GLIPHY_API_KEY } from "../secrets";
import "./sample.css";

const BASE_URL = 'https://api.giphy.com/v1/gifs/';

function searchGliphy(search = "cats") {
  const encodedSearch = encodeURIComponent(search);
  return fetch(`${BASE_URL}translate?api_key=${GLIPHY_API_KEY}&s=${encodedSearch}`, {
      mode: 'cors'
    })
    .then(validateResponse)
    .catch(error => {
      console.error("Error fetching data: ", error.message);
      // Rethrow the error if you need to catch it further up the chain
      throw error;
    });
}

function validateResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json().then(data => {
    if (data.data && data.data.length === 0) {
      throw new Error("No results found.");
    }
    return data;
  });
}




export { searchGliphy };
