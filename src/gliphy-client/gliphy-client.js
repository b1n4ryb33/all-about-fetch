import "./sample.css";
import {GLIPHY_API_KEY} from "../secrets";

const BASE_URL = 'https://api.giphy.com/v1/gifs/';

function searchGliphy(search="cats"){
   return fetch(
    `${BASE_URL}translate?api_key=${GLIPHY_API_KEY}&s=${search}`, 
    {mode: 'cors'})
    .then(function(response) {
        return response.json();
    }).catch(function(error){
        console.error(error.message);
    });   
  };



export { searchGliphy };