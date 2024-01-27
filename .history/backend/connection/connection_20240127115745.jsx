const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://freelancer_24:freelancer24@cluster0.ud0vsey.mongodb.net/"
    );
    console.log(`MongoDB connected at ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = ConnectDB;
