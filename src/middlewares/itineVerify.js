const itineraryDataVerification = (req, res, next) => {
    const { name, like, price, duration } = req.body;

    if (!name || typeof name !== "string") {
        return res.status(400).json({ message: "Invalid name" });
    }

    if (like !== undefined && typeof like !== "string" && typeof like !== "number") {
        return res.status(400).json({ message: "Invalid like" });
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
