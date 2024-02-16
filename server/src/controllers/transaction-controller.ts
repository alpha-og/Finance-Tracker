import express from "express";
import transactionSchema from "../models/transaction-model";
import User from "../models/user-model";

const createTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { user, amount, description } = req.body;
  try {
    const user_ = await User.findById(user);
    const newTransaction = new transactionSchema({
      user: user,
      amount: amount,
      description: description,
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
  const user = req.params.id;
  try {
    const user_ = await User.findById(user);
    if (!user_) res.status(404).send("User not found");
    const transactions = await transactionSchema.findOne({ user: user });
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
  const transId = req.params.id;
  try {
    const transaction = await transactionSchema.findById(transId);
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
  const transId = req.params.id;
  try {
    if (!transId) res.status(404).send("Please provide a transaction id");
    const transaction_ = await transactionSchema.findById(transId);
    if (!transaction_) res.status(404).send("Transaction not found");
    const transaction = await transactionSchema.deleteOne({ _id: transId });
    if (transaction.deletedCount === 0) {
      res.status(404).send("Transaction not found");
    }
    res.status(200).send("Transaction deleted");
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
  const { user, amount, description, id } = req.body;
  try {
    const user_trans = await User.findById(user);
    if (!user_trans) res.send(404).send("User not found");
    const transaction = await transactionSchema.updateOne(
      { _id: id },
      { amount: amount, description: description },
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
