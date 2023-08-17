const { connect } = require("mongoose");
require('dotenv').config();

let uri_link = process.env.MONGO

mongoose.connect(uri_link)
    .then(() => console.log('Database Connected'))
    .catch(error => console.log(error))