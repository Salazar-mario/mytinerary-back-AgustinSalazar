import express from 'express';
const router = express.Router();
import cities from './cities.js';

router.get('/', (request, response) => {
    console.log(request);
    response.send('Hello World');
});

router.use('/cities', cities);

export default router;
