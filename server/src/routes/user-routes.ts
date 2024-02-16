import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user-controller";

export const Router = express.Router();

Router.route("/user")
  .post(createUser)
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);
