import dotenv from "dotenv";
import app from "./app";
dotenv.config({ path: "./configs.env" });
const { PORT } = process.env;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});
