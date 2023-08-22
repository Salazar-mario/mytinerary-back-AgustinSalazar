const express = require('express');
const citiesController = require("../controllers/citiesController.js");

const cities = express.Router();
const { getAllCities, getCityById, createManyCities, updateCity, deleteCity } = citiesController;
const { verifyDataCity } = require('../middlewares/verifications');


cities.get('/', getAllCities);
cities.get('/:id', getCityById);
cities.post('/addCities', verifyDataCity,createManyCities);
cities.patch('/:id', verifyDataCity,updateCity);
cities.delete('/:id', deleteCity);

module.exports = cities;