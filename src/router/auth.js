const express = require('express')
const { register} = require('../controllers/auth');
const { verifyAuthData } = require('../middlewares/verifications');
const authRouter = express.Router();


authRouter.post('/register',verifyAuthData, register)
module.exports = authRouter;
