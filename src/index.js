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
    console.dir(data);
    let img = document.querySelector('img#dog-img');
    img.src = data.data.images.original.url;
}).then(function(response){
    console.dir(response);
});

searchGliphy().then(function(data){
    let img = document.querySelector('img#cat-img');
    img.src = data.data.images.original.url;
});

