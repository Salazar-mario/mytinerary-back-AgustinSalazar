const express = require('express');
const Itinerary = express.Router();
const itinerariesController = require('../controllers/itineraryController');
const { itineraryDataVerification } = require('../middlewares/itineVerify');
const {
    getItineraries,
    getItinerary,
    getItinerariesByCity,
    createItinerary,
    updateItinerary,
    deleteItinerary
} = itinerariesController;

Itinerary.get("/", getItineraries);
Itinerary.get("/:id", getItinerary);
Itinerary.get("/city/:cityId/itineraries", getItinerariesByCity);
Itinerary.post("/", itineraryDataVerification, createItinerary);
Itinerary.put("/:id", itineraryDataVerification, updateItinerary);
Itinerary.delete("/:id", deleteItinerary);

module.exports = Itinerary;
