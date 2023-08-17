const { Schema, model } = require('mongoose');

const collection = "cities";

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
    }
});

const City = model(collection, schema);

module.exports = City;
