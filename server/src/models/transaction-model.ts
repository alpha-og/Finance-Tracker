import mongoose, { Document } from "mongoose";

export type T_transactionCategory =
  | "Food"
  | "Healthcare"
  | "Leisure"
  | "Groceries"
  | "Transportation"
  | "Utilities"
  | "Shopping"
  | "Education"
  | "Travel"
  | "Miscellaneous";

const transactionCategories: T_transactionCategory[] = [
  "Food",
  "Healthcare",
  "Leisure",
  "Groceries",
  "Transportation",
  "Utilities",
  "Shopping",
  "Education",
  "Travel",
  "Miscellaneous",
];

export interface TransactionModel extends Document {
  user: string;
  title: string;
  description: string;
  amount: number;
  location: string;
  category: T_transactionCategory;
  date: Date;
  time: Date;
}

const transactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: false },
    amount: { type: Number, required: true },
    location: { type: String, required: false },
    category: { enum: transactionCategories, required: true },
    date: { type: Date },
    time: { type: Date },
  },
  { timestamps: true },
);

export default mongoose.model<TransactionModel>(
  "Transaction",
  transactionSchema,
);
