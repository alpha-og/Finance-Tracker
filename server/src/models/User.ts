import mongoose, { Document } from "mongoose";

export interface UserModel extends Document {
  user: string;
  password: string;
  email: string;
}

const userSchema = new mongoose.Schema({
  user: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<UserModel>("Users", userSchema);
