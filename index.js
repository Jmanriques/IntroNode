//cargar libreria
const axios = require("axios");

// creo variables para la llave de la Api y 
// para la ciudad de donde quiero saber el clima

let apiKey = "28ca4968891cb6bd7b6d13742cb4f624";
let city = "Bogota, col";

// se crea el objeto de llamada 
let requestconfig = {
    url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&appid=" + apiKey,
};

// creación de objeto promesa
let objPromesa = axios(requestconfig);

objPromesa
    .then(function(response){
        console.log(
            "la temperatura de Bogota es: " +
            (response.data.main.temp -273.15).toFixed(2).toString()+ " grados celcius");
    })
    .catch(function(err){
        console.log(err)
    });