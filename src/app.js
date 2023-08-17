const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const citiesRouter = require('./router/router.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

require('dotenv').config();

const uri_link = process.env.MONGO; // Utiliza el nombre de variable correcto (MONGO en lugar de URI_DB)

console.log('uri_link:', uri_link);
mongoose.connect(uri_link)
    .then(() => console.log('Database Connected'))
    .catch(error => console.log(error));

app.use('/cities', citiesRouter);
