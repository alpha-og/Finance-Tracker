import express from "express";

const signup = async (req: express.Request, res: express.Response) => {};
const signin = async (req: express.Request, res: express.Response) => {};
const signout = async (req: express.Request, res: express.Response) => {};
const forgotPassword = async (
  req: express.Request,
  res: express.Response,
) => {};

export default {
  signup,
  signin,
  signout,
  forgotPassword,
};
