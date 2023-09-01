const express = require('express');
const Itinerary = express.Router();
const itinerariesController = require('../controllers/itineraryController');
const { itineraryDataVerification } = require('../middlewares/itineVerify');

const {getItineraries,getItinerary,getItinerariesByCity,createItinerary,updateItinerary,deleteItinerary} = itinerariesController;

Itinerary.get("/", getItineraries);
Itinerary.get("/:id", getItinerary);
Itinerary.get("/city/:cityId", getItinerariesByCity);
Itinerary.post("/", itineraryDataVerification, createItinerary); 
Itinerary.put("/", itineraryDataVerification, updateItinerary);
Itinerary.delete("/", deleteItinerary);

module.exports = Itinerary;
