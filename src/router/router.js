const express = require('express');
const citiesController = require("../controllers/citiesController");

const cities = express.Router();
const {getAllCities, getCityById, createManyCities, updateCity, deleteCity} = citiesController;

cities.get('/', getAllCities);
cities.get('/:id', getCityById);
cities.post('/', createManyCities);
cities.put('/:id', updateCity);
cities.delete('/:id', deleteCity);

module.exports = cities;
