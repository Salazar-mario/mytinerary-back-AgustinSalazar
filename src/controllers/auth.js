const User = require('../models/user');

export default async (req, res, next) => {
    try {
        let one = await User.create(req.body);

        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: one 
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating user',
            error: error.message 
        });
    }
};
