const express = require('express');
const Router = require('./router/router');

const app = express();

app.use('/api', Router);

app.listen(3000, () => {
    console.log("listening on port 3000");
});
