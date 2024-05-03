/**
 * Global CSS imports
 */
import "./reset.css";
import "./main.css";

/**
 * Font Awesome
 */
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { searchGliphy } from "./gliphy-client/gliphy-client";

    searchGliphy("dogs").then(function(data){
        let img = document.querySelector('img#dog-img');
        img.src = data.data.images.original.url;
    }).catch(error => {
        document.querySelector('.search-error-message').textContent = error.message;}
    );

    searchGliphy().then(function(data){
        let img = document.querySelector('img#cat-img');
        img.src = data.data.images.original.url;
    }).catch(error => {
        document.querySelector('.search-error-message').textContent = error.message;}
    );;
    


document.querySelector('#refrehs-btn').addEventListener("click", () => {
    let search = document.querySelector('#search-text').value;
    searchGliphy(search).then(function(data){
            let img = document.querySelector('img#search-img');
            img.src = data.data.images.original.url;
        }).catch(error => {
            document.querySelector('.search-error-message').textContent = error.message;}
        ); 
})



