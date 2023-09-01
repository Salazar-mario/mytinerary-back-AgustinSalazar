require("./config/db");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./router/router.js');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', Router); 

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});