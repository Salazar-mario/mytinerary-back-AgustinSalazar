const express = require('express');
const citiesRouter = require("../router/cities.js");
const itinerariesRouter = require("../router/itinerary.js")
const router = express.Router();
const authRouter = require('../router/auth.js')
router.use('/cities', citiesRouter);
router.use('/itineraries', itinerariesRouter);
router.use('/user', authRouter)

module.exports = router;
