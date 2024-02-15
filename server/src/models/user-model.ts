import mongoose, { Document } from "mongoose";

export interface UserModel extends Document {
  username: string;
  email: string;
  password:string;
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true ,unique:true},
  password:{type:String,required:true}
});

export default mongoose.model<UserModel>("User", userSchema);
