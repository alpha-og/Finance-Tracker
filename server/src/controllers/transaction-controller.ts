import express from "express";
import transactionSchema from "../models/transaction-model";
import User from "../models/user-model";

const createTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { user_id, amount, desc } = req.body;
  try {
    const user = await User.findById(user_id, (err: Error, docs: string) => {
      if (err) {
        res.status(500).send(err.message);
      }
    });
    const data = new transactionSchema({
      user: user_id,
      amount: amount,
      description: desc,
    });
    await data.save();
    res.status(201).send("Transaction saved");
  } catch (err) {
    if (err instanceof Error) {
      const message = err.message;
      res.status(500).send(message);
    }
    res.status(500).send("server error");
  }
};

const getTransactions = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { user_id } = req.body;
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
