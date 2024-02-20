import mongoose, { Document } from "mongoose";

export interface UserModel extends Document {
  email: string;
  password: string;
  username: string;
  name: string;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: false },
  name: { type: String, required: false },
});

export default mongoose.model<UserModel>("User", userSchema);
