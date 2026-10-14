const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/constants.utils");

const authMiddleware = (req, res, next) => {
  const headers = req.headers.authorization;

  const arr = headers.split(" ");

  try {
    const decoded = jwt.verify(arr[1], JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).send({
      message: "Token is invalid or expired",
    });
  }
};

module.exports = {
  authMiddleware,
};
