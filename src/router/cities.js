const express = require('express');
const citiesController = require("../controllers/citiesController.js");
const cities = express.Router();
const { getCities, getCity, createManyCities, updateCity, deleteCity } = citiesController;
const { verifyDataCity } = require('../middlewares/verifications');

cities.get('/', getCities);
cities.get('/:id', getCity);
cities.post('/addCities', verifyDataCity,createManyCities);
cities.patch('/:id', verifyDataCity,updateCity);
cities.delete('/:id', deleteCity);

module.exports = cities;