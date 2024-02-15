import mongoose from "mongoose";
export default async function connectDB(
  MONGO_URI: string,
  options?: mongoose.ConnectOptions,
) {
  mongoose
    .connect(MONGO_URI, options)
    .then((res) => {
      console.log(`Connected to MongoDB at ${MONGO_URI}`);
    })
    .catch((error) => {
      console.log(`An error occurred while connecting to MongoDB: ${error}`);
    });
}
