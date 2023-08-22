const mongoose = require('mongoose');
const City = require('../models/city');


const getAllCities = async (req, res, next) => {
            try {
                let query = {};
    
                if (req.query.name) {
                    query.city = new RegExp(req.query.name, 'i');
                }
                if (req.query.country) {
                    query.country = new RegExp(req.query.country, 'i');
                }
    
                const cities = await City.find(query);
                res.status(200).json({ response: cities, success: true });
            } catch (err) {
                next(err);
            }
        }
    const getCityById = async (req, res, next) => {
        try {
            const genRes = {
                response: null,
                success: true,
                error: null
            };

            const id = req.params.id;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                genRes.success = false;
                genRes.error = 'Invalid ObjectId';
                return res.status(400).json(genRes);
            }

            genRes.response = await City.findById(id);
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    }
    const createManyCities = async (req, res, next) => {
        try {
            const createdCities = await City.create(req.body);
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
            const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
            const deletedCity = await City.findByIdAndDelete(req.params.id);
            res.status(200).json({ response: deletedCity, success: true });
        } catch (err) {
            next(err);
        }
    }

module.exports = {
    getAllCities,
    getCityById,
    createManyCities,
    updateCity,
    deleteCity
}