const Itinerary = require('../models/itinerary');

const getItineraries = async (req, res) => {
    try {
        let queries = {};
        if (req.query.itinerary) {
            queries.itinerary = new RegExp(`^${req.query.itinerary}`, 'i');
        }

        const itineraries = await Itinerary.find(queries);

        if (itineraries.length > 0) {
            return res.status(200).json({
                success: true,
                itineraries
            });
        }

        return res.status(404).json({
            success: false,
            message: "No matching itineraries found"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error getting the itineraries'
        });
    }
};

const getItineraryById = async (req, res) => {
    try {
        const oneItinerary = await Itinerary.findById(req.params.id);

        if (oneItinerary) {
            return res.status(200).json({
                success: true,
                itinerary: oneItinerary
            });
        }

        return res.status(404).json({
            success: false,
            message: 'Itinerary not found'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error getting the itinerary'
        });
    }
};

const createItinerary = async (req, res) => {
    try {
        const newItinerary = await Itinerary.create(req.body);

        return res.status(201).json({
            success: true,
            message: 'Itinerary created'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error creating the itinerary'
        });
    }
};

const updateItinerary = async (req, res) => {
    try {
        await Itinerary.updateOne({ _id: req.params.id }, req.body);
        return res.status(200).json({
            success: true,
            message: 'Itinerary updated successfully'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error trying to update the itinerary'
        });
    }
};

const deleteItinerary = async (req, res) => {
    try {
        await Itinerary.deleteOne({ _id: req.params.id });
        return res.status(200).json({
            success: true,
            message: 'Itinerary deleted successfully'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error trying to delete the itinerary'
        });
    }
};

module.exports = {
    getItineraries,
    getItineraryById,
    createItinerary,
    updateItinerary,
    deleteItinerary
};
