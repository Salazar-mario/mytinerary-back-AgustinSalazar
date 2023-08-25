const express = require('express');
const citiesRouter = require("../router/cities.js");
const itinerariesRouter = require("../router/itinerary.js")

const router = express.Router();

router.use('/cities', citiesRouter);
router.use('/itineraries', itinerariesRouter);
module.exports = router;
