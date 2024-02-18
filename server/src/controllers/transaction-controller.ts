import express from "express";
import transactionSchema from "../models/transaction-model";
import User from "../models/user-model";

const log_print = (method: string) => {
    console.log(method + " http://localhost:2000/api/v1/transaction");
};

const createTransaction = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const { user, amount, description } = req.body;
    log_print("POST");
    try {
        const user_check = await User.findById(user);
        const newTransaction = new transactionSchema({
            user: user,
            amount: amount,
            description: description,
        });
        await newTransaction.save();
        res.status(201).send({ message: "Transaction saved" });
    } catch (err) {
        if (err instanceof Error) {
            const message = err.message;
            res.status(500).send(message);
        }

        res.status(500).send({ message: "Srver error" });
    }
};

const getTransactions = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const user = req.params.id;
    log_print("GETS");
    try {
        const user_check = await User.findById(user);
        if (!user_check) res.status(404).send({ message: "User not found" });
        const transactions = await transactionSchema.find({ user: user });
        res.status(200).send(transactions);
    } catch (err) {
        if (err instanceof Error) res.status(500).send(err.message);
        res.status(500).send({ message: "Srver error" });
    }
};

const getTransaction = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const transId = req.params.id;
    log_print("GET");
    try {
        const transaction = await transactionSchema.findById(transId);
        res.status(200).send(transaction);
    } catch (err) {
        if (err instanceof Error) res.status(500).send({ messgae: err.message });

        res.status(500).send({ message: "Srver error" });
    }
};

const deleteTransaction = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const transId = req.params.id;
    log_print("DELETE");
    try {
        if (!transId)
            res.status(404).send({ message: "Please provide a transaction id" });
        const transaction_check = await transactionSchema.findById(transId);
        if (!transaction_check)
            res.status(404).send({ message: "Transaction not found" });
        const transaction = await transactionSchema.deleteOne({ _id: transId });
        if (transaction.deletedCount === 0) {
            res.status(404).send({ message: "Transaction not found" });
        }
        res.status(200).send({ message: "Transaction deleted" });
    } catch (err) {
        if (err instanceof Error) res.status(500).send(err.message);

        res.status(500).send({ message: "Srver error" });
    }
};

const updateTransaction = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const { user, amount, description, id } = req.body;
    log_print("PUT");
    try {
        const user_trans = await User.findById(user);
        if (!user_trans) res.send(404).send({ message: "User not found" });
        const transaction = await transactionSchema.updateOne(
            { _id: id },
            { amount: amount, description: description },
        );
        res.status(200).send({ message: "Updated successfully" });
    } catch (err) {
        if (err instanceof Error) res.status(500).send(err.message);

        res.status(500).send({ message: "Srver error" });
    }
};

export {
    getTransaction,
    getTransactions,
    createTransaction,
    deleteTransaction,
    updateTransaction,
};
