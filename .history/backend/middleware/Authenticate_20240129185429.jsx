const jwt = require("jsonwebtoken");
const Auth = require("../models/model.jsx");

const Authenticate = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    console.log(token); // Access the token from the cookies
    const verifyToken = jwt.verify(token);
    const rootUser = await Auth.findOne({
      _id: verifyToken.id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    console.error("Authentication error:", err.message);
    res.status(401).send("Unauthorized");
  }
};

module.exports = Authenticate;
