const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 
const dbName = process.env.DB_NAME;

const uri = `mongodb+srv://${username}:${password}@cluster0.xz64zac.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => {
        console.log('Database Connected');

    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });

module.exports = mongoose;
