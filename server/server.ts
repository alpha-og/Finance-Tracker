import express from "express";

const app = express();
app.get("/", (req, res)=>{res.send("Hi")})
app.listen(2000, () => {
  console.log("Connected to http://localhost:2000");
});

