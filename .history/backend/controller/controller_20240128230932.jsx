const Auth = require("../models/model.jsx");

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, DOB, password } = req.body;
  if (!firstName || !lastName || !email || !DOB || !password) {
    res.status(400).json({ error: "Fill in all details" });
    console.log("None of the fields can be empty");
    return;
  }
  try {
    const userExists = await Auth.findOne({ email });

    if (userExists) {
      res.status(400).json({ error: "User already exists" });
    } else {
      const user = new Auth({
        firstName,
        lastName,
        email,
        DOB,
        password,
      });

      const signUp = await user.save();

      if (signUp) {
        res.status(201).json({ message: "Registration Successful" });
      } else {
        res.status(400).json({ error: "Registration Failed" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Fill in all details" });
    console.log("None of the fields can be empty");
    return;
  }

  try {
    // Check if the user exists in the database
    const user = await Auth.findOne({ email });

    if (!user) {
      res.status(400).json({ error: "User not found" });
      return;
    }

    // Check if the provided password matches the stored plain text password
    if (password === user.password) {
      res.status(200).json({ message: "Login Successful" });
    } else {
      res.status(401).json({ error: "Sorry No Such user exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.forgotUser = async (req, res) => {
  const { email, DOB } = req.body;
  if (!email || !DOB) {
    res.status(400).json({ error: "Fill in all details" });
    console.log("None of the fields can be empty");
    return;
  }

  try {
    // Check if the user exists in the database
    const user = await Auth.findOne({ email });

    if (!user) {
      res.status(400).json({ error: "User not found" });
      return;
    }

    // Check if the provided password matches the stored plain text password
    if (DOB === user.DOB) {
      res.status(200).json({ message: "User Found" });
    } else {
      res.status(401).json({ error: "Sorry No Such user exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
