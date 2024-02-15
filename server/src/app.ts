import express from "express";
import { Router as transactionRoutes } from "./routes/transaction-routes";
import { Router as userRoutes } from "./routes/user-routes";
const ROUTE_PREFIX = "/api/v1";
const app = express();

app.use(express.json());

app.use(ROUTE_PREFIX, transactionRoutes);
app.use(ROUTE_PREFIX, userRoutes);

export default app;
