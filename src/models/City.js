const { Schema, model } = require('mongoose');
require("../cities.js");

const collection = "city";

const schema = new Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    
}, {
    timestamps: true,
    versionKey: false
});

const City = model(collection, schema);

module.exports = City;
