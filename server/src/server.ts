import express from "express";
import dotenv from "dotenv";
import app from "./app";
import connectDB from "./utils/connect-db";

dotenv.config({ path: "./configs.env" });
const { PORT, MONGO_URI } = process.env;

// Connect to the database
MONGO_URI
  ? connectDB(MONGO_URI)
  : console.log("MONGO_URI not found, database will not be connected");

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});
