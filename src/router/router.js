const express = require('express');
const cookieParser = require('cookie-parser'); 
const citiesRouter = require("../router/cities.js");
const itinerariesRouter = require("../router/itinerary.js");
const authRouter = require('../router/auth.js');

const router = express.Router();
router.use(cookieParser());

router.use('/cities', citiesRouter);
router.use('/itineraries', itinerariesRouter);
router.use('/user', authRouter);

module.exports = router;
