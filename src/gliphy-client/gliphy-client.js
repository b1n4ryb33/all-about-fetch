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

async function searchGliphyA(search = "cats"){
  try{
    const encodedSearch = encodeURIComponent(search);
    
    const response = await fetch(`${BASE_URL}translate?api_key=${GLIPHY_API_KEY}&s=${encodedSearch}`, {
      mode: 'cors'
    });

    let result = await validateResponseA(response);
    return result;
  } catch (error){
    console.error("Error fetching data: ", error.message);
  }
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


async function validateResponseA(response){
 
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  let responseJson = await response.json();
  let data = responseJson.data;
  
  if (data.data && data.data.length === 0) {
    throw new Error("No results found.");
  }
  
  return responseJson;
}



export { searchGliphy, searchGliphyA };
