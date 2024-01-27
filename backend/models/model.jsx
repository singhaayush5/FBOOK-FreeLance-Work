const mongoose = require("mongoose");
const { isEmail } = require("validator");

const LoginSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { strict: false }
);

const Auth = mongoose.model("LOGINUSER", LoginSchema);
module.exports = Auth;
