const itineraryDataVerification = (req, res, next) => {
    const { name, image, price, duration } = req.body;

    if (!name || typeof name !== "string") {
        return res.status(400).json({ message: "Invalid name" });
    }

    if (!image || typeof image !== "string") {
        return res.status(400).json({ message: "Invalid image" });
    }

    if (!price || typeof price !== "number") {
        return res.status(400).json({ message: "Invalid price" });
    }

    if (!duration || typeof duration !== "number") {
        return res.status(400).json({ message: "Invalid duration" });
    }

    next();
};

module.exports = { itineraryDataVerification };
