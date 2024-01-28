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
      console.log(user);
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
exports.editUser = async (req, res) => {
  try {
    const { email, DOB, password } = req.body;

    if (!email || !DOB || !password) {
      return res
        .status(400)
        .json({ error: "Email, DOB, and password are required" });
    }

    const existingUser = await StudentLogin.findOne({ email, DOB });

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User not found or invalid credentials" });
    }

    // Update the password
    existingUser.password = password;

    const done = await existingUser.save();

    if (done) {
      return res.status(200).json({ message: "Password updated successfully" });
    } else {
      return res.status(400).json({ error: "Password not updated" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
