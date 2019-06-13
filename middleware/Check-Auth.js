const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "should_be_kept_secret");
        next();
    } catch (error) {
        res.json({ message: "Login Please..." });
    }
}