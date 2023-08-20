const City = require('../models/city');
const citiesData = require('../cities');

City.countDocuments({})
    .then(count => {
        if (count === 0) {
            return City.insertMany(citiesData);
        }
    })
    .then(() => {
        console.log('Initial data added to the database.');
    })
    .catch(err => {
        console.error('Error adding initial data to the database:', err);
    });
    
    //para borrar e insertar nueva base de datos
    /*City.deleteMany({})
    .then(() => {
        console.log('Existing data cleared.');
        return City.insertMany(citiesData);
    })
    .then(() => {
        console.log('New data inserted.');
    })
    .catch(err => {
        console.error('Error clearing or inserting data:', err);
    });*/

