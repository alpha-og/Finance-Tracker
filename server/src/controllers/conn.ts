import mongoose from "mongoose";

export default async function conn() {
  mongoose
    .connect(String(process.env.MONGO_DB))
    .then(() => {
      console.log("Connected to server");
    })
    .catch((error: Error) => console.log(error.message));
}
