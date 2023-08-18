const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const citiesRouter = require('./router/router'); 
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', citiesRouter); 

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

require('dotenv').config();

const uri = process.env.MONGO; 

mongoose.connect(uri)
    .then(() => console.log('Database Connected'))
    .catch(error => console.error('Error connecting to database:', error));
