import express from "express";
import {
  getTransactions,
  getTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from "../controllers/transaction-controller";

export const Router = express.Router();

Router.route("/transaction/:id").get(getTransaction).delete(deleteTransaction);
Router.route("/transaction").post(createTransaction).put(updateTransaction);
Router.route("/transactions").get(getTransactions);
