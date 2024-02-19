import express from "express";
import cors from "cors";
import { Router as transactionRoutes } from "./routes/transaction-routes";
import { Router as userRoutes } from "./routes/user-routes";
import { Router as authRoutes } from "./routes/auth-routes";

const ROUTE_PREFIX = "/api/v1";
const app = express();

app.use(cors()) 
app.use(express.json());

app.use(ROUTE_PREFIX, transactionRoutes);
app.use(ROUTE_PREFIX, userRoutes);
app.use(ROUTE_PREFIX, authRoutes);

export default app;
