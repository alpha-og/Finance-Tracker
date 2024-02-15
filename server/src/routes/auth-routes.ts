import express from "express";
import { signup, signin, signout, forgotPassword } from "../controllers/auth-controller";
export const Router = express.Router();

Router.post("/auth/signup", signup);
Router.post("/auth/signin", signin);
Router.post("/auth/signout", signout);
Router.post("/auth/forgot-password", forgotPassword);
