const { Schema, model } = require('mongoose');

let collection = 'users'
let schema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    photo: { type: String, default: null },
    password: { type: String, required: true },
    country: { type: String, required: true }
})

let User = model(collection, schema)
module.exports = User;