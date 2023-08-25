const express = require('express');
const Itinerary = express.Router();
const  itinerariesController = require("../controllers/itineraryController");

const router = express.Router()

const { getItineraries, createItinerary, getItineraryById, updateItinerary, deleteItinerary }= itinerariesController;

router.get('/', getItineraries);

router.get('/:id', getItineraryById);

router.post('/', createItinerary);

router.put('/:id', updateItinerary);

router.delete('/:id', deleteItinerary);
 
module.exports = Itinerary;