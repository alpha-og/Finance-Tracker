import express from "express";
import transactionSchema from "../models/transaction";

const createTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { amount, desc } = req.body;
  console.log(amount, desc);
  const data = new transactionSchema({
    user: user,
    amount: amount,
    description: desc,
  });
  await data
    .save()
    .then(() => {
      console.log("Transaction saved");
      res.status(201).send("Transaction saved");
    })
    .catch((error: Error) => {
      res
        .status(500)
        .send("There was some error while saving the transaction " + error);
    });
};
const getTransactions = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  res.send("Hello world");
};

const getTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  res.send("Hello world");
};

const deleteTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  res.send("Hello world");
};

const updateTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  res.send("Hello world");
};

export {
  getTransaction,
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
};
