const express = require('express');
const citiesController = require("../controllers/citiesController");

const router = express.Router()

router.get('/cities', citiesController.getCities);

router.post('/city', citiesController.createCity);


