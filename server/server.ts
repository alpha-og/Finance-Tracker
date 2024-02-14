import express from "express";

const app = express();

// Public route
const public_ = require("./routes/public");

app.use("/", public_);

app.listen(2000, () => {
  console.log("Connected to http://localhost:2000");
});
