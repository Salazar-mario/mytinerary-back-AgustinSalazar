const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().min(4).max(20).required().messages({
        "string.email": "Please enter a valid email",
        "string.min": "Email must be at least 4 characters",
        "string.max": "Email must be at most 20 characters",
        "string.empty": "Please enter your email",
        "any.required": "Please enter your email",
    }),
    password: Joi.string().alphanum().min(6).max(16).required()
});

const verifyDataCity = (req, res, next) => {
    let { country, city, image, comment } = req.body;

    if (country === "") {
        return res.status(400).json({
            message: 'Invalid country'
        });
    }

    if (city === "") {
        return res.status(400).json({
            message: 'Invalid city'
        });
    }

    if (image === "") {
        return res.status(400).json({
            message: 'Invalid image'
        });
    }

    if (comment === "") {
        return res.status(400).json({
            message: 'Invalid comment'
        });
    }

    next();
};


const verifyAuthData = (req, res, next) => {
    const payload = req.body;
    const userValidated = userSchema.validate(payload);

    if (userValidated.error){
        return res.status(400).json({message: userValidated.error.details.map((err)=> err.message)})
    }
    next()
};


module.exports = {
    verifyDataCity,
    verifyAuthData
};