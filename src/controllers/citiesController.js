const City = require("../models/City");

const genRes = {
    response: [],
    success: true,
    error: null
}

const citiesController = {
    getAllCities: async (req, res, next) => {
        try {
            genRes.response = await City.find();
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    getCityById: async (req, res, next) => {
        try {
            genRes.response = await City.findById(req.params.id);
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    createManyCities: async (req, res, next) => {
        try {
            genRes.response = await City.create(req.body);
            res.status(201).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    updateCity: async (req, res, next) => {
        try {
            genRes.response = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    deleteCity: async (req, res, next) => {
        try {
            genRes.response = await City.findByIdAndDelete(req.params.id);
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = citiesController;
