const express = require('express');
const Itinerary = express.Router();
const itinerariesController = require('../controllers/itineraryController');
const { itineraryDataVerification } = require('../middlewares/itineVerify');
const {getItineraries, getItinerary, getItinerariesByCity, createItinerary, updateItinerary, deleteItinerary} = itinerariesController;
const passport = require('passport');
const { passportVerificator } = require('../middlewares/auth');

Itinerary.get("/",passportVerificator.authenticate("jwt", { session: false }), getItineraries);
Itinerary.get("/:id",passportVerificator.authenticate("jwt", { session: false }), getItinerary);
Itinerary.get("/city/:cityId/itineraries", getItinerariesByCity);
Itinerary.post("/",passportVerificator.authenticate("jwt", { session: false }), itineraryDataVerification, createItinerary);
Itinerary.put("/:id",passportVerificator.authenticate("jwt", { session: false }), itineraryDataVerification, updateItinerary);
Itinerary.delete("/:id",passportVerificator.authenticate("jwt", { session: false }), deleteItinerary);

module.exports = Itinerary;
