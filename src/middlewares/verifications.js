

const verifyDataCity = (req, res, next) =>{

    let { country, city, image } = req.body 
    if (!country || !city || !image) {
        return res.status(400).json({
            message: 'Invalid information'
        })
    }
    if (country == "" ){
        return res.status(400).json({
            message: 'Invalid country'
    })}
    if (city == "" ){
        return res.status(400).json({
            message: 'Invalid city'
    })}
    if (Image == "" ){
        return res.status(400).json({
        message: 'Invalid image'
        })
    }

next()
}

module.exports = {
    verifyDataCity
}


