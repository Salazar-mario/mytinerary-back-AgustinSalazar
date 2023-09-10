const express = require('express');
const { register, login, authenticated } = require('../controllers/auth');
const { verifyAuthData } = require('../middlewares/verifications');
const { hashPassword, verifyUserExists, verifyPassword, generateToken } = require('../middlewares/auth');
const passport = require('passport');

const authRouter = express.Router();

authRouter.post('/register', verifyAuthData, hashPassword, register);

authRouter.post('/login', verifyAuthData, verifyUserExists, verifyPassword, generateToken, login);
authRouter.post('/authenticated', passport.authenticate('jwt', { session: false }), authenticated);

module.exports = authRouter;
