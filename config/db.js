require('dotenv').config();
const mongoose = require('mongoose');

/**
 * Function to connect mongoDB to express.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Connect mongo URI from env.
    console.log(`Database connected!`); // Log connection success message.
  } catch (err) {
    console.log(`Error connecting database: ${err.message}`); // Log if connection failed.
  };
};

module.exports = connectDB; // Export connectDB.