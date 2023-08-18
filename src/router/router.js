const express = require('express');
const citiesRouter = require("../router/cities");

const router = express.Router();

router.get("/", (request, response) => {
    console.log(request);
    response.send("Hello World");
});
router.use('/cities', citiesRouter);

module.exports = router;
