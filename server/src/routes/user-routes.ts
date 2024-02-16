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

// {username: John, email: john@example, password: 1234}
// {username: Jojo, email: jojo@gmail.com, password: 18}
// {username: Newman email: newman@gmail, password: 140380}
