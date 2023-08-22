const verifyDataCity = (req, res, next) => {
  /*  let { country, city, image, comment } = req.body;

    if (!country || !city || !image || !comment) {
        return res.status(400).json({
            message: 'Invalid information'
        });
    }

    if (country == "") {
        return res.status(400).json({
            message: 'Invalid country'
        });
    }

    if (city == "") {
        return res.status(400).json({
            message: 'Invalid city'
        });
    }

    if (image == "") {
        return res.status(400).json({
            message: 'Invalid image'
        });
    }

    if (comment === "") {
        return res.status(400).json({
            message: 'Invalid comment'
        });
    }*/

    next();
};

module.exports = {
    verifyDataCity
};
