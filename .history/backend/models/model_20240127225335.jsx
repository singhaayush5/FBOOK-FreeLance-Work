const mongoose = require("mongoose");
const { isEmail } = require("validator");

const StudentLoginSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
      validate: [isEmail, "Please enter a valid email"],
    },
    gender: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      minlength: [10, "Phone number must contain 10 digits"],
    },
    password: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
      unique: [true, "Roll number already exists"],
    },
    branch: {
      type: String,
      required: true,
    },
  },
  { strict: false }
);

const StudentLogin = mongoose.model("LOGINUSER", StudentLoginSchema);
module.exports = StudentLogin;
