/*const express = require('express');
const citiesController = require("../controllers/citiesController");

const cities = express.Router();
const { getAllCities, getCityById, createManyCities, updateCity, deleteCity } = citiesController;

cities.get('/', getAllCities);
cities.get('/:id', getCityById);
cities.post('/', createManyCities);
cities.put('/:id', updateCity);
cities.delete('/:id', deleteCity);

module.exports = cities;*/
// router/cities.js
const express = require('express');
const citiesController = require("../controllers/citiesController");
const mongoose = require('mongoose');

const cities = express.Router();
const { getAllCities, getCityById, createManyCities, updateCity, deleteCity } = citiesController;

require('dotenv').config();  // Asegúrate de cargar las variables de entorno

// Utiliza la URL de conexión desde el archivo .env
const uri = process.env.MONGO; 

mongoose.connect(uri)
    .then(() => console.log('Database Connected'))
    .catch(error => console.error('Error connecting to database:', error));

cities.get('/', getAllCities);
cities.get('/:id', getCityById);
cities.post('/', createManyCities);
cities.put('/:id', updateCity);
cities.delete('/:id', deleteCity);

module.exports = cities;



