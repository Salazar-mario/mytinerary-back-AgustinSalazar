const User = require("../models/user.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const payload = req.body;
        const userExists = await User.findOne({ mail: payload.mail });
        if (userExists) {
            return res.status(403).json({ message: "The user already exists" });
        }
        const passwordHash = bcrypt.hashSync(payload.password, 10);
        payload.password = passwordHash;
        const userCreated = await User.create(payload);
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: userCreated
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating user',
            error: error.message
        });
    }
};
const signIn = async (req, res, next) => {
    try {
        let { mail, password } = req.body;
        const userExists = await User.findOne({ mail });
        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }
        const passwordValid = bcrypt.compareSync(password, userExists.password);
        if (!passwordValid) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        const token = jwt.sign({ _id: userExists._id, mail: userExists.mail }, process.env.SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({
            success: true,
            userData: { mail: userExists.mail, profile_pic: userExists.profile_pic },
            token: token,
            message: 'Sign in successfully'
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const signout = (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Signout successful'
    });
};
const login = (req, res) => {
    try {
        res.status(200).json({
            message: "Successfully logged in",
            token: req.token,
            user: {
                user: req.user.email,
                _id: req.user._id
            }
        })
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }

};

module.exports = {
    register,
    signout,
    signIn,
    login
};
