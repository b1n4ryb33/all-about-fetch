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

import { searchGliphy, searchGliphyA } from "./gliphy-client/gliphy-client";

    let dogImg = await searchGliphyA("dogs");
    let img = document.querySelector('img#dog-img');
    img.src = dogImg.data.images.original.url;


    let catImg = await searchGliphyA();
    let cimg = document.querySelector('img#cat-img');
    cimg.src = catImg.data.images.original.url;

    // searchGliphy("dogs").then(function(data){
    //     let img = document.querySelector('img#dog-img');
    //     img.src = data.data.images.original.url;
    // }).catch(error => {
    //     document.querySelector('.search-error-message').textContent = error.message;}
    // );

    // searchGliphy().then(function(data){
    //     let img = document.querySelector('img#cat-img');
    //     img.src = data.data.images.original.url;
    // }).catch(error => {
    //     document.querySelector('.search-error-message').textContent = error.message;}
    // );;
    


document.querySelector('#refrehs-btn').addEventListener("click", () => {
    let search = document.querySelector('#search-text').value;
    searchGliphy(search).then(function(data){
            let img = document.querySelector('img#search-img');
            img.src = data.data.images.original.url;
        }).catch(error => {
            document.querySelector('.search-error-message').textContent = error.message;}
        ); 
})

