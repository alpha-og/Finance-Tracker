import express from "express";
import transactionSchema from "../models/transaction-model";
import User from "../models/user-model";

const createTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { userId, amount, desc } = req.body;
  try {
    const user = await User.findById(userId, (err: Error, docs: string) => {
      if (err) {
        res.status(500).send(err.message);
      }
    });
    const newTransaction = new transactionSchema({
      user: userId,
      amount: amount,
      description: desc,
    });
    await newTransaction.save();
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
  const { userId } = req.body;
  try {
    const transactions = await transactionSchema.find({ user: userId });
    res.status(200).send(transactions);
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    res.status(500).send("Server error");
  }
};

const getTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { userId, transId } = req.body;
  try {
    const transaction = await transactionSchema.findOne({
      user: userId,
      _id: transId,
    });
    res.status(200).send(transaction);
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    res.status(500).send("Server error");
  }
};

const deleteTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { userId, transId } = req.body;
  try {
    const transaction = await transactionSchema.deleteOne({
      user: userId,
      _id: transId,
    });
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    res.status(500).send("Server error");
  }
};

const updateTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { userId, amount, desc, transId } = req.body;
  try {
    const transaction = await transactionSchema.updateOne(
      { _id: transId, user: userId },
      { amount: amount, description: desc },
    );
    res.status(200).send("Updated successfully");
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    res.status(500).send("Server error");
  }
};

export {
  getTransaction,
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
};
