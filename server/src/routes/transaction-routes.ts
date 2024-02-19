import express from "express";
import {
  getTransactions,
  getTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from "../controllers/transaction-controller";

export const Router = express.Router();

Router.route("/transaction/:id")
  .get(getTransaction)
  .put(updateTransaction)
  .delete(deleteTransaction);
Router.route("/transaction").post(createTransaction);
Router.route("/transactions/:user_id").get(getTransactions);
