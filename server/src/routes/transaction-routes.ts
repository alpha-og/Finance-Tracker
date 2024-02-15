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
  .post(createTransaction)
  .put(updateTransaction)
  .delete(deleteTransaction);
Router.route("/transactions").get(getTransactions);
