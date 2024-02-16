import express from "express";
import User from "../models/user-model";
const signup = async (req: express.Request, res: express.Response) => {
        try {
        const user = new User(req.body);
        await user.save();
    } catch (error) {
        return res.status(400).json({
            error: "Error saving user in database",
        });
    }
};
const signin = async (req: express.Request, res: express.Response) => {};
const signout = async (req: express.Request, res: express.Response) => {};
const forgotPassword = async (
  req: express.Request,
  res: express.Response,
) => {};

export { signup, signin, signout, forgotPassword };

