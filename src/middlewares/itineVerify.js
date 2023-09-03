const itineraryDataVerification = (req, res, next) => {
    const { name, user, like, image, price, duration } = req.body;

    if (!name || typeof name !== "string") {
        return res.status(400).json({ message: "Invalid name" });
    }

    if (!user|| typeof user !== "string") {
        return res.status(400).json({ message: "Invalid user" });
    }

    if (!image || typeof image !== "string") {
        return res.status(400).json({ message: "Invalid image" });
    }

    if (like !== undefined && !Array.isArray(like)) {
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
