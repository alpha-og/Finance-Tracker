import express from "express";
import transactionSchema from "../models/transaction-model";
import User from "../models/user-model";

const createTransaction = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { user, amount, desc } = req.body;
  try {
    const user_ = await User.findById(user);
    const newTransaction = new transactionSchema({
      user: user,
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
  const { user } = req.body;
  try {
    const transactions = await transactionSchema.find({ user: user });
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
  const transId = req.body.id;
  try {
    const transaction = await transactionSchema.deleteOne({
      _id: transId,
    });
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
  const { user, amount, desc, id } = req.body;
  try {
    const transaction = await transactionSchema.updateOne(
      { _id: id, user: user },
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
