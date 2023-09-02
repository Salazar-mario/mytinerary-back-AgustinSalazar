const { Schema, model } = require('mongoose');

let collection = "itineraries";
let schema = new Schema({
    name: { type: String, required: true },
    city_id: { type: Schema.Types.ObjectId, required: true, ref: 'city' }, 
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    tags: [{ type: String, required: true }],
    like: { type: String, required: true },
}, {
    timestamps: true
});
let Itinerary = model(collection, schema);
module.exports = Itinerary;
