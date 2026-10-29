const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error("MONGODB_URI is not defined");
  }

  await mongoose.connect(mongoURI, {
    dbName: "shreycade",
    serverSelectionTimeoutMS: 10000,
  });

  console.log("✅ MongoDB Atlas connected successfully");
  console.log(`📦 Database: ${mongoose.connection.name}`);
};

module.exports = connectDB;