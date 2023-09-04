const mongoose = require('mongoose');
const city = require('../models/city');
const Itinerary = require('../models/itinerary')

const getItineraries = async (req, res, next) => {
    try {
        const itineraries = await Itinerary.find().populate({ path: "city_id", select: "city country" });

        res.json({
            success: true,
            response: itineraries
        })
    } catch (error) {
        console.log(error);
    }
};

const getItinerary = async (req, res, next) => {
    const { id } = req.params;
    try {
        const itinerary = await Itinerary.findById(id).populate({ path: "city_id", select: "city country" });

        if (!itinerary) {
            return res.status(404).json({ success: false, message: 'Itinerary not found' });
        }

        res.json({
            success: true,
            response: itinerary
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


const getItinerariesByCity = async (req, res, next) => {
    const { cityId } = req.params;
    
    try {
        console.log("cityId:", cityId); 
        const itineraries = await Itinerary.find({ city_id: cityId }).populate({ path: "city_id", select: "city country" });
        console.log("Itineraries:", itineraries); 
        res.json({
            success: true,
            response: itineraries
        });
    } catch (error) {
        console.log(error);
    }
};
const createItinerary = async (req, res) => {
    try {
        const cityId = req.body.cityId;
        const citydata = await city.findById(cityId);

        if (!citydata) {
            return res.status(404).json({ success: false, message: 'City not found' });
        }

        console.log("City ID:", cityId); 
        console.log("City:", citydata); 

        const itineraryData = {
            name: req.body.name,
            city_id: citydata._id, 
            price: req.body.price,
            duration: req.body.duration,
            tags: req.body.tags,
            like: req.body.like,
            user: req.body.user,
            image: req.body.image
        };
        
        const itinerary = await Itinerary.create(itineraryData);
        res.status(201).json({ success: true, response: itinerary });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};



const deleteItinerary = async (req, res, next) => {
    const { id } = req.params;
    try {
        await Itinerary.findByIdAndDelete(id);

        res.json({
            success: true,
            response: "Deleted document with id " + id
        })
    } catch (error) {
        console.log(error);
    }
};
const updateItinerary = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedItinerary = await Itinerary.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedItinerary) {
            return res.status(404).json({ success: false, message: 'Itinerary not found' });
        }

        res.json({ success: true, response: updatedItinerary });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    getItineraries,
    getItinerary,
    getItinerariesByCity,
    createItinerary,
    updateItinerary,
    deleteItinerary
};