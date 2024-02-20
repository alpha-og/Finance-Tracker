import { Request, Response } from "express";
import User from "../models/user-model";

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    let message = "Some error occurred while fetching user";
    if (error instanceof Error) {
      message = error.message;
    }
    return res.status(500).json({ success: false, message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  try {
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    let message = "Some error occurred while creating user";
    if (error instanceof Error) {
      message = error.message;
    }
    return res.status(500).json({ success: false, message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedUser = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    }
    res.status(500).json({ success: false, message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    let message = "Some error occurred while deleting user";
    if (error instanceof Error) {
      message = error.message;
    }
    return res.status(500).json({ message });
  }
};
