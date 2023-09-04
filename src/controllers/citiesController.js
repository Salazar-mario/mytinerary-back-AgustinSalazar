const mongoose = require('mongoose');
const city = require('../models/city');

const getCities = async (req, res) => {
    const query = {};
    if (req.query.country) {
        query.country = { $regex: "^" + req.query.country, $options: 'i' };
    }
    try {
        let cities = await city.find(query);
        res.status(200).json({ cities });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const getCity = async (req, res) => {
    try {
        let { id } = req.params
        let cityFound = await city.findById(id)
        res.status(200).json({ cityFound })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
const createManyCities = async (req, res, next) => {
    try {
        const createdCities = await city.create(req.body);
        res.status(201).json({
            response: createdCities,
            success: true,
            message: 'Cities created successfully'
        });
    } catch (err) {
        next(err);
    }
}

const updateCity = async (req, res, next) => {
    try {
        const updatedCity = await city.findByIdAndUpdate(
            req.params.id,
            {
                country: req.body.country,
                image: req.body.image,
                comment: req.body.comment,
                city: req.body.city
            },
            { new: true }
        );
        res.status(200).json({
            response: updatedCity,
            success: true,
            message: 'City updated successfully'
        });
    } catch (err) {
        next(err);
    }
}


const deleteCity = async (req, res, next) => {
    try {
        const deletedCity = await city.findByIdAndDelete(req.params.id);
        res.status(200).json({ response: deletedCity, success: true });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getCities,
    getCity,
    createManyCities,
    updateCity,
    deleteCity
}