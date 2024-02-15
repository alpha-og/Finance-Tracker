import mongoose, { Document } from "mongoose";
import User from "./User";

export interface TransactionModel extends Document {
  user: string;
  amount: number;
  description: string;
}

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<TransactionModel>(
  "Transaction",
  transactionSchema,
);
