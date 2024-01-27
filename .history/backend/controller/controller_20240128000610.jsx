import Auth, { findOne } from "../models/model";

export async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({ error: "Fill in all details" });
    console.log("None of the fields can be empty");
    return;
  }

  try {
    const userExists = await findOne({ email });

    if (userExists) {
      res.status(400).json({ error: "User already exists" });
    } else {
      const user = new Auth({
        firstName,
        lastName,
        email,
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
}
