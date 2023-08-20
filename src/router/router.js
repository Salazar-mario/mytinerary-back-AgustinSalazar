const express = require('express');
const citiesRouter = require("../router/cities.js");

const router = express.Router();

router.use('/cities', citiesRouter);

module.exports = router;
