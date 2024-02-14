import express from "express";
import { Transaction } from "../models/transaction";

exports.transaction = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const data = new Transaction({
        req.body,
    })
};
