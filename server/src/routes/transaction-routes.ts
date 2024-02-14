import express from "express";

export const Router = express.Router();

Router.route("/transaction/:id")
  .get((req, res) => {
    res.send(req.params);
  })
  .post()
  .put()
  .delete();
Router.route("/transactions").get((req, res) => {
  res.send("All transactions");
});
