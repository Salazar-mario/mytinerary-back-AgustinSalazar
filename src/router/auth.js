const express = require('express');
const { register, login, authenticated } = require('../controllers/auth');
const { verifyAuthData } = require('../middlewares/verifications');
const { hashPassword, verifyUserExists, verifyPassword, generateToken, passportVerificator } = require('../middlewares/auth');
const passport = require('passport');

const authRouter = express.Router();
authRouter.post('/register', verifyAuthData, hashPassword, register);
authRouter.post('/login', verifyAuthData, verifyUserExists, verifyPassword, generateToken, login);
authRouter.post('/authenticated', passportVerificator.authenticate("jwt", { session: false }), generateToken, authenticated);

module.exports = authRouter;
