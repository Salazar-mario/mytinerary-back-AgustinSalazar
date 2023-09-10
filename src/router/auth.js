const express = require('express')
const { register, login} = require('../controllers/auth');
const { verifyAuthData } = require('../middlewares/verifications');
const { hashPassword, verifyUserExists, verifyPassword, generateToken } = require('../middlewares/auth');

const authRouter = express.Router();


authRouter.post('/register', verifyAuthData , hashPassword ,register)
authRouter.post('/login', verifyAuthData,verifyUserExists,verifyPassword,generateToken ,login)

module.exports =authRouter