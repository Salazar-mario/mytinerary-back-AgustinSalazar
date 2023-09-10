const joi = require("joi");

let userSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "name must have at least 3 characters please",
        'string.max': "name must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "name can not be empty",
        'any.required': "name is required"

    }),
    mail: joi.string().required().min(5).max(30).messages({
        'string.min': "mail must have at least 3 characters please",
        'string.max': "mail must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "mail can not be empty",
        'any.required': "mail is required"
    }),
    password: joi.string()
        .required()
        .min(6)
        .max(15)
        .messages({
            'string.min': "password must have at least 6 characters please",
            'string.max': "password must have less less than 20 characters or be equal to 20 characters please!",
            'string.empty': "password can not be empty",
            'any.required': "password is required"
        }),
    country: joi.string().required().min(3).max(20).messages({
        'string.min': "country must have at least 3 characters please",
        'string.max': "country must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "country can not be empty",
        'any.required': "country is required"
    }),
    lastName: joi.string().min(3).max(20).empty('').messages({
        'string.min': "last name must have at least 3 characters please",
        'string.max': "last name must have less less than 20 characters or be equal to 20 characters please!"
    }),
    photo: joi.string().uri().required().messages({
        "string.uri": "x ¡Please load your URL! x",
        "string.empty": "x ¡Empty images, please try again! x",
        "any.required": "x ¡URL required! x",
    }),

})

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

    const UserSchema = joi.object({
        mail: joi.string().required().min(5).max(30).messages({
            'string.min': "mail must have at least 3 characters please",
            'string.max': "mail must have less than 30 characters or be equal to 30 characters please!",
            'string.empty': "mail can not be empty",
            'any.required': "mail is required"
        }),
        password: joi.string()
            .required()
            .min(6)
            .max(15)
            .messages({
                'string.min': "password must have at least 6 characters please",
                'string.max': "password must have less than 15 characters or be equal to 15 characters please!",
                'string.empty': "password can not be empty",
                'any.required': "password is required"
            }),
    });

    const userValidated = UserSchema.validate(payload, { allowUnknown: true });

    if (userValidated.error) {
        return res.status(400).json({ message: userValidated.error.details.map((err) => err.message) });
    }
    next();
};


module.exports = {
    verifyDataCity,
    verifyAuthData
};
