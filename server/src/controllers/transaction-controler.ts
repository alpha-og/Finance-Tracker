import express from "express";
import transactionSchema from "../models/transaction";
import User from "../models/User";

exports.transaction_post = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { user_id, amount, desc } = req.body;
  try {
    const user = await User.find({ _id: user_id });
    const data = new transactionSchema({
      user: user,
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

// export default { transaction_post };
