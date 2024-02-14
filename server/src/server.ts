import express from "express";
const app = express();

app.use(express.json());

import dotenv from "dotenv";
dotenv.config({ path: "./configs.env" });
const { PORT } = process.env;

import conn from "./controllers/conn";
conn();
const controllers_ = require("./controllers/transaction-control");

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

app.post("/signup", (req: express.Request, res: express.Response) => {
  res.send("Signup");
});
app.post("/signin", (req: express.Request, res: express.Response) => {
  res.send("Signin");
});
app.post("/data", (req: express.Request, res: express.Response) => {
  res.send("Data");
});
app.post("/data_trans", controllers_.transaction_post);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});
