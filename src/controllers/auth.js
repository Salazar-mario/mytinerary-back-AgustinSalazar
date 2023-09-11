const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const userPayload = req.body;
    const userExists = await User.findOne({ mail: userPayload.mail });

    try {
        if (userExists) {
            return res.status(403).json({
                message: "This user already exists"
            });
        }
        const newUser = await User.create(userPayload);
        res.status(200).json(
            {
                "message": "user registered",
                "user": newUser
            }
        );

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        res.status(200).json({
            message: "Successfully logged in",
            token: req.token,
            user: {
                mail: req.user.mail,
                id: req.user._id,
                userProfilePhoto: req.user.photo, 
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const authenticated = async (req, res) => {
    try {
        res.status(200).json({
            message: "Successfully authenticated",
            token: req.token,
            user: {
                mail: req.user.mail,
                id: req.user._id,
                userProfilePhoto: req.user.photo,
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { register, login, authenticated };