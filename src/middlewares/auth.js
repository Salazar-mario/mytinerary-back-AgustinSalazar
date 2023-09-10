const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

const hashPassword = (req, res, next) => {
    try {
        const passPlain = req.body.password;
        const hashPassword = bcrypt.hashSync(passPlain, 10);
        req.body.password = hashPassword;
        next();
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const verifyPassword = (req, res, next) => {
    const passPlain = req.body.password;
    const hashPassword = req.user.password;
    
    console.log("Contraseña proporcionada:", passPlain);
    console.log("Contraseña almacenada en la base de datos:", hashPassword);

    const isValid = bcrypt.compareSync(passPlain, hashPassword);

    if (isValid) {
        next();
    } else {
        console.log("Contraseña incorrecta");
        res.status(400).json({
            message: "Wrong password!"
        });
    }
};


const verifyUserExists = async (req, res, next) => {
    const { mail } = req.body;
    const userFounded = await User.findOne({ mail: mail });

    if (userFounded) {
        req.user = userFounded;
        next();
    } else {
        res.status(400).json({ message: "User not found" });
    }
};

const generateToken = (req, res, next) => {
    try {
        let secretKey = process.env.SECRET_KEY;
        let token = jwt.sign({ mail: req.user.mail }, secretKey, { expiresIn: '50m' });
        req.token = token;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const passportVerificator = passport.use(
    new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: "Mindhub2023",
    }, async (payload, done) => {
        try {
            let userFounded = await User.findOne({ mail: payload.mail });

            if (userFounded) {
                return done(null, userFounded);
            } else {
                return done(null);
            }
        } catch (error) {
            return done(error);
        }
    })
);

module.exports = { hashPassword, verifyPassword, verifyUserExists, generateToken, passportVerificator };