import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config({ path: "./configs.env" });
const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signup", (req, res) => {
  res.send("Signup");
});
app.post("/signin", (req, res) => {
  res.send("Signin");
});
app.post("/data", (req, res) => {
  res.send("Data");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});
